import base64

import cv2
import numpy as np
from app.beacon_estimator.beacon_estimator import estimate_beacon, estimate_beacon_img
from app.data import data
from app.pathfinder import pathfinder
from app.processing.map import process_map
from app.simulator import simulator
from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
from pydantic.main import BaseModel

# FastAPI stuff
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def index():
    return {"message": "no. dont."}


@app.post("/map/processImage")
async def processImage(file: UploadFile = File(...)):
    pil_img = Image.open(file.file)

    img = cv2.cvtColor(np.array(pil_img), cv2.COLOR_RGB2BGR)

    orig_img, better_img = process_map(img)

    beacons = estimate_beacon_img(better_img)

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
        "beacons": beacons,
    }

    # return StreamingResponse(io.BytesIO(img_png.tobytes()), media_type="image/png")


@app.get("/map/firetest")
async def firetest(id_: str):
    doc_ref = data.map_ref.document(id_)

    return doc_ref.get().to_dict()


@app.get("/map/teststorage")
async def teststorage(id_: str):
    ret = data.get_images(id_)

    if isinstance(ret, HTTPException):
        return ret

    map_img, orig_img = ret

    return {"orig_img": {"size": orig_img.shape}, "map_img": {"size": map_img.shape}}


@app.get("/map/processMarkers")
async def processMarkers(id_: str):
    return await pathfinder.processMarkers(id_)


@app.post("/map/shortestpathtest")
async def shortestpath(id_: str, source: pathfinder.Point, dest: pathfinder.Point):
    return await pathfinder.shortestpath(id_, source, dest)


@app.post("/map/nearestExit")
async def nearestExit(id_: str, source: pathfinder.Point):
    return await pathfinder.nearestExit(id_, source)


@app.get("/map/estimateBeacons")
async def estimateBeacons(id_: str):
    return {"beacons": estimate_beacon(id_)}


class SimulationParams(BaseModel):
    num_emp: int
    num_incap_emp: int
    num_ert: int


@app.post("/simulate")
async def simulate(id_: str, params: SimulationParams):
    return await simulator.simulate(
        id_, params.num_emp, params.num_incap_emp, params.num_ert
    )
