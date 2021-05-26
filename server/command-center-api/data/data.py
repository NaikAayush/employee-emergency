import base64
import io
import json
import os
from typing import Tuple, Union

import cv2
import firebase_admin
import numpy as np
from fastapi.exceptions import HTTPException
from firebase_admin import firestore, storage
from pathfinder import pathfinder
from pathfinding.core.grid import Grid
from PIL import Image

_fire_encoded = os.getenv("FIREBASE_SERVICE_ACCOUNT")
assert _fire_encoded is not None, "FIREBASE_SERVICE_ACCOUNT has to be in env"
_creds = firebase_admin.credentials.Certificate(
    json.loads(base64.b64decode(_fire_encoded))
)
firebase_admin.initialize_app(_creds, {"storageBucket": "orange-ey-gds.appspot.com"})

db = firestore.client()
map_ref = db.collection("map")
bucket = storage.bucket()


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
    if map_url in pathfinder.img_cache:
        print("nice map image there")
        map_img = pathfinder.img_cache[map_url]
    else:
        map_img = get_image(map_url)
        if isinstance(map_img, HTTPException):
            return map_img
        else:
            map_img = cv2.cvtColor(map_img, cv2.COLOR_BGR2GRAY)
            pathfinder.img_cache[map_url] = map_img

    return map_img


def get_orig_img(id_: str) -> Union[np.ndarray, HTTPException]:
    orig_url = f"map/{id_}/orig"
    if orig_url in pathfinder.img_cache:
        print("nice map image there")
        map_img = pathfinder.img_cache[orig_url]
    else:
        map_img = get_image(orig_url)
        if isinstance(map_img, HTTPException):
            return map_img
        else:
            pathfinder.img_cache[orig_url] = map_img

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
    if id_ in pathfinder.grid_cache:
        return pathfinder.grid_cache[id_]
    else:
        map_img = get_map_img(id_)
        if isinstance(map_img, HTTPException):
            return map_img

        grid = Grid(matrix=map_img)

        pathfinder.grid_cache[id_] = grid

        return grid
