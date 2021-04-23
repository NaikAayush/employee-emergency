from quart import Quart, request
from processing.map import process_map
import cv2

app = Quart(__name__)

@app.route("/")
async def index():
    return "no. dont."

@app.route("/map/processImage", methods=["POST"])
async def processImage():
    file_ = request.files["image"]
    file_.stream
    return "TODO: process image here"
