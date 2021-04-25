import io
import os
import base64
import json
from typing import Any, Dict, List, Tuple, Union

from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from numpy.lib import math
from pydantic import BaseModel

from PIL import Image
import cv2
import numpy as np

from pathfinding.core.diagonal_movement import DiagonalMovement
from pathfinding.core.grid import Grid
from pathfinding.finder.a_star import AStarFinder

import firebase_admin
from firebase_admin import firestore
from firebase_admin import storage
from dotenv import load_dotenv

from processing.map import process_map


# FastAPI stuff
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Point(BaseModel):
    x: float
    y: float


class PathQuery(BaseModel):
    source: Point
    dest: Point


class Marker(BaseModel):
    name: str
    top: float
    left: float
    height: int
    width: int


class Map(BaseModel):
    id_: str
    exits: List[Marker]
    entries: List[Marker]
    beacons: List[Marker]
    others: List[Marker]


# Firebase stuff
load_dotenv()
_fire_encoded = os.getenv("FIREBASE_SERVICE_ACCOUNT")
assert _fire_encoded is not None, "FIREBASE_SERVICE_ACCOUNT has to be in env"
_creds = firebase_admin.credentials.Certificate(
    json.loads(base64.b64decode(_fire_encoded))
)
firebase_admin.initialize_app(_creds, {"storageBucket": "orange-ey-gds.appspot.com"})

db = firestore.client()
map_ref = db.collection("map")
bucket = storage.bucket()

# cache layer
img_cache: Dict[str, np.ndarray] = {}
grid_cache: Dict[str, Grid] = {}
map_data: Dict[str, Dict] = {}

# pathfinding
finder = AStarFinder(diagonal_movement=DiagonalMovement.always)


@app.get("/")
async def index():
    return {"message": "no. dont."}


@app.post("/map/processImage")
async def processImage(file: UploadFile = File(...)):
    pil_img = Image.open(file.file)

    img = cv2.cvtColor(np.array(pil_img), cv2.COLOR_RGB2BGR)

    orig_img, better_img = process_map(img)

    # return {
    #     "filename": file.filename,
    #     "width": pil_img.width,
    #     "height": pil_img.height
    # }

    _, better_img_png = cv2.imencode(".png", better_img)
    _, orig_img_png = cv2.imencode(".png", orig_img)

    better_img_bytes: bytes = better_img_png.tobytes()
    orig_img_bytes: bytes = orig_img_png.tobytes()

    return {
        "orig_img": base64.b64encode(orig_img_bytes),
        "proc_img": base64.b64encode(better_img_bytes),
    }

    # return StreamingResponse(io.BytesIO(img_png.tobytes()), media_type="image/png")


@app.get("/map/firetest")
async def firetest(id_: str):
    doc_ref = map_ref.document(id_)

    return doc_ref.get().to_dict()


def get_image(url: str) -> Union[HTTPException, np.ndarray]:
    blob = bucket.get_blob(url)
    if blob is None:
        return HTTPException(
            status_code=400, detail=f"Map image with url {url} does not exist"
        )
    img = blob.download_as_bytes()
    img_file = io.BytesIO(img)
    pil_img = Image.open(img_file)
    cv_img = cv2.cvtColor(np.array(pil_img), cv2.COLOR_RGB2BGR)
    return cv_img


def get_map_img(id_: str) -> Union[np.ndarray, HTTPException]:
    map_url = f"map/{id_}/map"
    if map_url in img_cache:
        print("nice map image there")
        map_img = img_cache[map_url]
    else:
        map_img = get_image(map_url)
        if isinstance(map_img, HTTPException):
            return map_img
        else:
            map_img = cv2.cvtColor(map_img, cv2.COLOR_BGR2GRAY)
            img_cache[map_url] = map_img

    return map_img


def get_orig_img(id_: str) -> Union[np.ndarray, HTTPException]:
    orig_url = f"map/{id_}/orig"
    if orig_url in img_cache:
        print("nice map image there")
        map_img = img_cache[orig_url]
    else:
        map_img = get_image(orig_url)
        if isinstance(map_img, HTTPException):
            return map_img
        else:
            img_cache[orig_url] = map_img

    return map_img


def get_images(id_: str) -> Union[Tuple[np.ndarray, np.ndarray], HTTPException]:
    map_img = get_map_img(id_)
    orig_img = get_orig_img(id_)

    if isinstance(map_img, HTTPException):
        return map_img
    if isinstance(orig_img, HTTPException):
        return orig_img

    return map_img, orig_img


def get_grid(id_: str) -> Union[HTTPException, Grid]:
    if id_ in grid_cache:
        return grid_cache[id_]
    else:
        map_img = get_map_img(id_)
        if isinstance(map_img, HTTPException):
            return map_img

        grid = Grid(matrix=map_img)

        grid_cache[id_] = grid

        return grid


@app.get("/map/teststorage")
async def teststorage(id_: str):
    ret = get_images(id_)

    if isinstance(ret, HTTPException):
        return ret

    map_img, orig_img = ret

    return {"orig_img": {"size": orig_img.shape}, "map_img": {"size": map_img.shape}}


def get_nearest_node(grid: Grid, point: Point):
    return grid.node(round(point.x), round(point.y))


def get_map_data(id_: str):
    doc_ref = map_ref.document(id_).get().to_dict()

    if doc_ref is None:
        return HTTPException(400, f"Map data with ID {id_} does not exist")

    exits: List[Marker] = []
    entries: List[Marker] = []
    beacons: List[Marker] = []
    others: List[Marker] = []

    for marker in doc_ref["markers"]:
        marker_obj = Marker(
            name=marker["name"],
            top=marker["top"],
            left=marker["left"],
            height=marker["height"],
            width=marker["width"],
        )
        if marker["name"]== "exit":
            exits.append(marker_obj)
        elif marker["name"]== "entry":
            entries.append(marker_obj)
        elif marker["name"]== "beacon":
            beacons.append(marker_obj)
        else:
            others.append(marker_obj)

    return Map(id_=id_, exits=exits, entries=entries, beacons=beacons, others=others)


@app.post("/map/shortestpathtest")
async def shortestpath(id_: str, source: Point, dest: Point):
    grid = get_grid(id_)

    if isinstance(grid, HTTPException):
        return grid

    grid.cleanup()

    start = get_nearest_node(grid, source)
    end = get_nearest_node(grid, dest)

    path, runs = finder.find_path(start, end, grid)

    return {
        "message": "Success",
        "path": path,
        "runs": runs,
        "grid": {"height": grid.height, "width": grid.width},
    }


@app.post("/map/nearestExit")
async def nearestExit(id_: str, source: Point):
    grid = get_grid(id_)

    if isinstance(grid, HTTPException):
        return grid

    map_data = get_map_data(id_)
    if isinstance(map_data, HTTPException):
        return map_data

    start = get_nearest_node(grid, source)
    shortest_path = None
    shortest_dist = None
    shortest_runs = None

    print(map_data)

    for exit in map_data.exits:
        grid.cleanup()

        end = get_nearest_node(
            grid, Point(x=exit.top + exit.height / 2, y=exit.left + exit.width / 2)
        )
        path, runs = finder.find_path(start, end, grid)

        print(shortest_path, shortest_runs, shortest_dist)

        if len(path) != 0 and (shortest_dist is None or len(path) < shortest_dist):
            shortest_dist = len(path)
            shortest_path = path
            shortest_runs = runs


    return {
        "message": "Success",
        "path": shortest_path,
        "runs": shortest_runs,
        "grid": {"height": grid.height, "width": grid.width},
    }
