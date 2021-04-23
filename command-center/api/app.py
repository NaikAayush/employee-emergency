import io

from fastapi import FastAPI, UploadFile, File
from starlette.responses import StreamingResponse

from PIL import Image
import cv2
import numpy as np

from processing.map import process_map

app = FastAPI()


@app.get("/")
async def index():
    return {"message": "no. dont."}


@app.post("/map/processImage")
async def processImage(file: UploadFile = File(...)):
    pil_img = Image.open(file.file)

    img = cv2.cvtColor(np.array(pil_img), cv2.COLOR_RGB2BGR)

    better_img = process_map(img)

    # return {
    #     "filename": file.filename,
    #     "width": pil_img.width,
    #     "height": pil_img.height
    # }

    _, img_png = cv2.imencode(".png", better_img)

    return StreamingResponse(io.BytesIO(img_png.tobytes()), media_type="image/png")

