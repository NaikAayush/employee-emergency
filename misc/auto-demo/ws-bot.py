import random
import asyncio
import websockets
import json

import numpy as np

uri = "ws://35.244.26.150:5050/update?id="


async def send1(name):
    pos1 = {
        "name": "Samyak",
        "x": 315,
        "y": 87
    }

    async with websockets.connect(uri + name) as websocket:
        while True:
            pos1["x"] += random.randrange(-5, 5)
            pos1["y"] += random.randrange(-5, 5)
            print("sending", pos1)
            await websocket.send(json.dumps(pos1))
            await asyncio.sleep(1)


async def send3(name):
    pos1 = {
        "name": "Aayush",
        "x": 546,
        "y": 65
    }

    async with websockets.connect(uri + name) as websocket:
        while True:
            pos1["x"] += random.randrange(-5, 5)
            pos1["y"] += random.randrange(-5, 5)
            print("sending", pos1)
            await websocket.send(json.dumps(pos1))
            await asyncio.sleep(1)


async def send2(name):
    pos1 = {
        "name": "Emp 2",
        "x": 365,
        "y": 100
    }

    async with websockets.connect(uri + name) as websocket:
        width = 796
        height = 415

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


async def main():
    await asyncio.gather(send1("brr"), send2("abc"), send3("592s1XmfNwYujg7Y1thbkDyOTZf2"))


asyncio.run(main())
