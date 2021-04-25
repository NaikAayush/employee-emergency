import io
import base64

from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import StreamingResponse

from PIL import Image
import cv2
import numpy as np

from processing.map import process_map

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "*"
    ],
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
        "proc_img": base64.b64encode(better_img_bytes)
    }

    # return StreamingResponse(io.BytesIO(img_png.tobytes()), media_type="image/png")

