import os

import dotenv
import requests
import websockets

dotenv.load_dotenv()

uri = f"{os.getenv('WS_HOST')}/update?id="
apiUri = os.getenv("API_HOST")
# apiUri = "http://127.0.0.1:8000"
# mapId = "45b0b2a3-bb7d-4560-8a32-f48d2ba8fd43"
scale = 5.380952380952381


def _post_nearest_exit_path(initial_pos):
    r = requests.post(
        f"{apiUri}/map/nearestExitSmol",
        params={"id_": mapId},
        json={
            "x": round(initial_pos["x"] / scale),
            "y": round(initial_pos["y"] / scale),
        },
    )
    print(r.text)

    resp = r.json()
    # pprint(resp)

    if "path" in resp:
        path = resp["path"]
        path = [[x * scale - 10, y * scale - 5] for (x, y) in path]
        return path
    else:
        return []


def _post_shortest_path(initial_pos, other_pos):
    r = requests.post(
        f"{apiUri}/map/shortestpathtest",
        params={"id_": mapId},
        json={
            "source": {
                "x": round(initial_pos["x"] / scale),
                "y": round(initial_pos["y"] / scale),
            },
            "dest": {
                "x": round(other_pos["x"] / scale),
                "y": round(other_pos["y"] / scale),
            },
        },
    )
    print(r.text)

    resp = r.json()
    # pprint(resp)

    if "path" in resp:
        path = resp["path"]
        path = [[x * scale - 10, y * scale - 5] for (x, y) in path]
        return path
    else:
        return []
