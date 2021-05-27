import asyncio
import json
import os
from pprint import pprint

import dotenv
import numpy as np
import websockets
import data
from fastapi.exceptions import HTTPException
from numpy.random import default_rng
from pathfinder import Point, nearestExitSmol, shortestpath

dotenv.load_dotenv()

uri = f"{os.getenv('WS_HOST')}/update?id="
apiUri = os.getenv("API_HOST")
# apiUri = "http://127.0.0.1:8000"
# mapId = "45b0b2a3-bb7d-4560-8a32-f48d2ba8fd43"
scale = 5.380952380952381


async def _get_nearest_exit_path(mapId, initial_pos):
    # r = requests.post(
    #     f"{apiUri}/map/nearestExitSmol",
    #     params={"id_": mapId},
    #     json={
    #         "x": round(initial_pos["x"] / scale),
    #         "y": round(initial_pos["y"] / scale),
    #     },
    # )
    # print(r.text)
    # resp = r.json()
    # pprint(resp)

    resp = await nearestExitSmol(
        mapId,
        Point(x=round(initial_pos["x"] / scale), y=round(initial_pos["y"] / scale)),
    )

    if not isinstance(resp, HTTPException):
        if "path" in resp:
            path = resp["path"]
            path = [[x * scale - 10, y * scale - 5] for (x, y) in path]
            return path
        else:
            return []


async def _get_shortest_path(mapId, initial_pos, other_pos):
    # r = requests.post(
    #     f"{apiUri}/map/shortestpathtest",
    #     params={"id_": mapId},
    #     json={
    #         "source": {
    #             "x": round(initial_pos["x"] / scale),
    #             "y": round(initial_pos["y"] / scale),
    #         },
    #         "dest": {
    #             "x": round(other_pos["x"] / scale),
    #             "y": round(other_pos["y"] / scale),
    #         },
    #     },
    # )
    # print(r.text)

    # resp = r.json()
    # pprint(resp)

    resp = await shortestpath(
        mapId,
        Point(x=round(initial_pos["x"] / scale), y=round(initial_pos["y"] / scale)),
        Point(x=round(other_pos["x"] / scale), y=round(other_pos["y"] / scale)),
    )

    if not isinstance(resp, HTTPException):
        if "path" in resp:
            path = resp["path"]
            path = [[x * scale - 10, y * scale - 5] for (x, y) in path]
            return path
        else:
            return []


async def _go_to_path(uid, pos, path):
    async with websockets.connect(uri + uid) as websocket:

        async def send(x, y, pause=0.5):
            pos["x"] = x
            pos["y"] = y
            print(f"sending for uid {uid}: ", pos)
            await websocket.send(json.dumps(pos))
            await asyncio.sleep(pause)

        for x, y in path:
            await send(x, y, 0.5)


async def emp_exit(mapId, uid, initial_pos):
    path = _get_nearest_exit_path(mapId, initial_pos)

    pprint(path)
    # print(r.json())
    pos = initial_pos

    await _go_to_path(uid, pos, path)


async def ert_rescue(mapId, uid, pos, rescue_pos):
    await _go_to_path("emp4", rescue_pos, [[p["x"], p["y"]] for p in [rescue_pos]])
    await _go_to_path(uid, pos, [[p["x"], p["y"]] for p in [pos]])

    await asyncio.sleep(10)

    async with websockets.connect(uri + uid) as websocket:

        async def send(x, y, pause=0.5):
            pos["x"] = x
            pos["y"] = y
            print(f"sending for uid {uid}: ", pos)
            await websocket.send(json.dumps(pos))
            await asyncio.sleep(pause)

        await send(pos["x"], pos["y"])

        path = await _get_shortest_path(mapId, pos, rescue_pos)

        pprint(path)

        for x, y in path:
            await send(x, y, 0.5)

        await asyncio.gather(
            emp_exit(mapId, "emp4", {"name": "EMP 4", **rescue_pos}),
            emp_exit(mapId, uid, pos),
        )


rng = default_rng()


async def simulate(mapId, num_emp, num_ert):
    map_arr = data.get_map_img(mapId)

    if isinstance(map_arr, HTTPException):
        return map_arr

    emp_coords = rng.choice(np.argwhere(map_arr == 1))

    pprint(emp_coords)


# async def main():
#     # await asyncio.gather(send1("brr"), send2("abc"), send3("592s1XmfNwYujg7Y1thbkDyOTZf2"))
#     await asyncio.gather(
#         emp_exit("emp1", {"name": "EMP 1", "x": 344, "y": 110}),
#         emp_exit("emp2", {"name": "EMP 2", "x": 279.30, "y": 433.96}),
#         emp_exit("emp3", {"name": "EMP 3", "x": 387.6, "y": 302.95}),
#         ert_rescue(
#             "ert1",
#             {"name": "ERT 1", "x": 225.62, "y": 343.89, "ert": True},
#             {"name": "EMP 4", "x": 465.8, "y": 302.95},
#         ),
#         emp_exit("ert2", {"name": "ERT 2", "x": 222.89, "y": 389.38, "ert": True}),
#         emp_exit("ert3", {"name": "ERT 3", "x": 213.79, "y": 473.99, "ert": True}),
#     )

if __name__ == "__main__":
    asyncio.run(simulate("45b0b2a3-bb7d-4560-8a32-f48d2ba8fd43", 5, 5))
