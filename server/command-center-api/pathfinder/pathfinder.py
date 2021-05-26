import json
import logging
import math
import processing.map
from data import data
from dataclasses import dataclass
from typing import Dict, List
from fastapi.exceptions import HTTPException

from pydantic import BaseModel
import numpy as np

from pathfinding.core.diagonal_movement import DiagonalMovement
from pathfinding.core.grid import Grid
from pathfinding.finder.a_star import AStarFinder


class Point(BaseModel):
    x: float
    y: float


class PathQuery(BaseModel):
    source: Point
    dest: Point


class Marker(BaseModel):
    name: str
    top: float
    left: float
    height: int
    width: int

@dataclass
class POI:
    """Points of interest - same as marker, but only point"""

    name: str
    loc: Point


@dataclass
class Map:
    id_: str
    exits: List[Marker]
    entries: List[Marker]
    beacons: List[Marker]
    others: List[Marker]

    def get_markers(self):
        for m in self.exits:
            yield m
        for m in self.entries:
            yield m
        for m in self.beacons:
            yield m
        for m in self.others:
            yield m


# cache layer
img_cache: Dict[str, np.ndarray] = {}
grid_cache: Dict[str, Grid] = {}
map_data: Dict[str, Dict] = {}

# pathfinding
finder = AStarFinder(diagonal_movement=DiagonalMovement.always)


def get_nearest_node(grid: Grid, point: Point):
    return grid.node(round(point.x), round(point.y))


def get_map_data(id_: str):
    doc_ref = data.map_ref.document(id_).get().to_dict()

    if doc_ref is None:
        return HTTPException(400, f"Map data with ID {id_} does not exist")

    exits: List[Marker] = []
    entries: List[Marker] = []
    beacons: List[Marker] = []
    others: List[Marker] = []

    for marker in doc_ref["markers"]:
        marker_obj = Marker(
            name=marker["name"],
            top=marker["top"],
            left=marker["left"],
            height=marker["height"],
            width=marker["width"],
        )
        if marker["name"] == "exit":
            exits.append(marker_obj)
        elif marker["name"] == "entry":
            entries.append(marker_obj)
        elif marker["name"] == "beacon":
            beacons.append(marker_obj)
        else:
            others.append(marker_obj)

    return Map(id_=id_, exits=exits, entries=entries, beacons=beacons, others=others)


def set_map_data(id_: str, data_: dict):
    doc_ref = data.map_ref.document(id_)
    doc_data: dict = doc_ref.get().to_dict()

    if doc_data is None:
        return HTTPException(400, f"Map data with ID {id_} does not exist")

    doc_data.update(data_)
    doc_ref.update(doc_data)

    return True


async def processMarkers(id_: str):
    map_data = get_map_data(id_)
    if isinstance(map_data, HTTPException):
        return map_data

    # get images here
    ret = data.get_images(id_)

    if isinstance(ret, HTTPException):
        return ret

    map_img, orig_img = ret

    print(map_img.shape, orig_img.shape)

    h_scale = orig_img.shape[0] / map_img.shape[0]
    w_scale = orig_img.shape[1] / map_img.shape[1]

    print(h_scale)
    print(w_scale)
    exits: List[POI] = []
    others: List[POI] = []

    def get_nearest_valid(img: np.ndarray, x, y):
        x_close, x_min, x_max = round(x), math.floor(x), math.ceil(x)
        y_close, y_min, y_max = round(y), math.floor(y), math.ceil(y)

        for x_cand in (x_close, x_min, x_max):
            for y_cand in (y_close, y_min, y_max):
                if img[x_cand, y_cand] > 0:
                    return Point(x=x_cand, y=y_cand)

        logging.warning(
            "Point (%f, %f) is on an invalid point (%d, %d)", x, y, x_close, y_close
        )
        return Point(x=x_close, y=y_close)

    for marker in map_data.exits:
        exits.append(
            POI(
                name=marker.name,
                loc=get_nearest_valid(
                    map_img,
                    x=(marker.top + marker.height / 2) / w_scale,
                    y=(marker.left + marker.width / 2) / h_scale,
                ),
            )
        )

    map_img[map_img > 0] = 1
    # map_arr = dict(((str(i), j) for i, j in enumerate(map_img.tolist())))
    map_arr = map_img.tolist()
    map_arr_s = json.dumps(map_arr, separators=(',', ':'))
    # print(map_arr_s)
    print(len(map_arr))
    print(len(map_arr[0]))

    set_map_data(id_, {"array": map_arr_s, "exits": [poi.loc.dict() for poi in exits]})


async def shortestpath(id_: str, source: Point, dest: Point):
    grid = data.get_grid(id_)

    if isinstance(grid, HTTPException):
        return grid

    grid.cleanup()

    start = get_nearest_node(grid, source)
    end = get_nearest_node(grid, dest)

    path, runs = finder.find_path(start, end, grid)

    return {
        "message": "Success",
        "path": path,
        "runs": runs,
        "grid": {"height": grid.height, "width": grid.width},
    }


async def nearestExit(id_: str, source: Point):
    grid = data.get_grid(id_)

    if isinstance(grid, HTTPException):
        return grid

    map_data = get_map_data(id_)
    if isinstance(map_data, HTTPException):
        return map_data

    start = get_nearest_node(grid, source)
    shortest_path = None
    shortest_dist = None
    shortest_runs = None

    print(map_data)

    scale = processing.map.IMAGE_WIDTH / processing.map.MAP_WIDTH

    for exit in map_data.exits:
        grid.cleanup()
        print(exit)

        end = get_nearest_node(
            grid, Point(x=(exit.top + exit.height / 2)/scale, y=(exit.left + exit.width / 2)/scale)
        )
        path, runs = finder.find_path(start, end, grid)

        print(shortest_path, shortest_runs, shortest_dist)

        if len(path) != 0 and (shortest_dist is None or len(path) < shortest_dist):
            shortest_dist = len(path)
            shortest_path = path
            shortest_runs = runs

    return {
        "message": "Success",
        "path": shortest_path,
        "runs": shortest_runs,
        "grid": {"height": grid.height, "width": grid.width},
    }
