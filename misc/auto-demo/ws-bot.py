import asyncio
import json
import random
from pprint import pprint

import numpy as np
import requests
import websockets

uri = "ws://35.244.26.150:5050/update?id="
apiUri = "http://35.244.26.150:8000"
mapId = "2ef08d0b-dc55-490f-9b98-4f33cb85a254"
scale = 5.380952380952381


async def send1(name):
    pos1 = {"name": "Samyak", "x": 315, "y": 87}

    async with websockets.connect(uri + name) as websocket:
        while True:
            pos1["x"] += random.randrange(-5, 5)
            pos1["y"] += random.randrange(-5, 5)
            print("sending", pos1)
            await websocket.send(json.dumps(pos1))
            await asyncio.sleep(1)


async def send3(name):
    pos1 = {"name": "Aayush", "x": 546, "y": 65}

    async with websockets.connect(uri + name) as websocket:
        while True:
            pos1["x"] += random.randrange(-5, 5)
            pos1["y"] += random.randrange(-5, 5)
            print("sending", pos1)
            await websocket.send(json.dumps(pos1))
            await asyncio.sleep(1)


async def send2(name):
    pos1 = {"name": "Emp 2", "x": 365, "y": 100}

    async with websockets.connect(uri + name) as websocket:
        # width = 796
        # height = 415

        part1speed = 30
        part1x = np.linspace(87, 231, part1speed)
        part1y = np.linspace(375, 289, part1speed)

        part2speed = 30
        part2x = np.linspace(231, 300, part2speed)
        part2y = np.linspace(285, 202, part2speed)

        part3speed = 20
        part3x = np.linspace(300, 200, part3speed)
        part3y = np.linspace(202, 73, part3speed)

        async def send(x, y):
            pos1["x"] = x
            pos1["y"] = y
            print("sending", pos1)
            await websocket.send(json.dumps(pos1))
            await asyncio.sleep(0.5)

        for (x, y) in zip(part1x, part1y):
            await send(x, y)

        for (x, y) in zip(part2x, part2y):
            await send(x, y)

        for (x, y) in zip(part3x, part3y):
            await send(x, y)


def _post_nearest_exit_path(initial_pos):
    r = requests.post(
        f"{apiUri}/map/nearestExit",
        params={"id_": mapId},
        json={"x": initial_pos["x"] / scale, "y": initial_pos["y"] / scale},
    )

    resp = r.json()
    # pprint(resp)

    if "path" in resp:
        path = resp["path"]
        path = [[x * scale - 10, y * scale - 10] for (x, y) in path]
        return path
    else:
        return []


async def emp_exit(uid, initial_pos):
    path = _post_nearest_exit_path(initial_pos)

    pprint(path)
    # print(r.json())
    pos = initial_pos

    async with websockets.connect(uri + uid) as websocket:
        async def send(x, y, pause=0.5):
            pos["x"] = x
            pos["y"] = y
            print(f"sending for uid {uid}: ", pos)
            await websocket.send(json.dumps(pos))
            await asyncio.sleep(pause)

        for x, y in path:
            await send(x, y, 0.5)


async def main():
    # await asyncio.gather(send1("brr"), send2("abc"), send3("592s1XmfNwYujg7Y1thbkDyOTZf2"))
    await asyncio.gather(emp_exit("emp1", {"name": "EMP 1", "x": 344, "y": 110}))


asyncio.run(main())
