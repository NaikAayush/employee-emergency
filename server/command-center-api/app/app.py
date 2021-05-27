import base64

from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from PIL import Image
import cv2
import numpy as np


from app.processing.map import process_map
from app.pathfinder import pathfinder
from app.data import data


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
