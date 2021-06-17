import logging
from typing import List, Tuple

import cv2
import numpy as np
from app.data.data import get_map_img
from app.processing.map import _resize_image
from fastapi.exceptions import HTTPException

# Set up logger
logger = logging.getLogger("beacon_estimator")
logger.setLevel(logging.INFO)
ch = logging.StreamHandler()
ch.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
ch.setFormatter(formatter)
logger.addHandler(ch)


def draw_img(img):

    cv2.imshow("image", img)
    cv2.waitKey(0)
    cv2.destroyAllWindows()


# beacons will be placed every BEACON_DISTANCE centimeters (= pixels)
BEACON_DISTANCE = 200


def estimate_beacon(id_):
    map_img = get_map_img(id_)

    if isinstance(map_img, HTTPException):
        return

    map_img = _resize_image(map_img)

    print(map_img.shape)
    total = map_img.size

    ones = np.count_nonzero(map_img)

    print(ones, total)

    # draw_img(map_img)

    edges: np.ndarray = cv2.Canny(map_img, 100, 200)
    shape = edges.shape

    # draw_img(edges)

    edge_list = np.argwhere(edges > 0).tolist()
    edge_list.sort()

    # pprint(edge_list)

    visited = {}

    def dfs(edge: Tuple[int, int], local_edge_list: list):
        logger.debug("in dfs, edge: %s", edge)
        if edges[edge] <= 0 or edge in visited:
            return

        visited[edge] = True

        local_edge_list.append(edge)

        if edge[0] > 0:
            dfs((edge[0] - 1, edge[1]), local_edge_list)

            if edge[1] > 0:
                dfs((edge[0] - 1, edge[1] - 1), local_edge_list)
            if edge[1] < shape[1] - 1:
                dfs((edge[0] - 1, edge[1] + 1), local_edge_list)

        if edge[0] < shape[0] - 1:
            dfs((edge[0] + 1, edge[1]), local_edge_list)

            if edge[1] > 0:
                dfs((edge[0] + 1, edge[1] - 1), local_edge_list)
            if edge[1] < shape[1] - 1:
                dfs((edge[0] + 1, edge[1] + 1), local_edge_list)

        if edge[1] > 0:
            dfs((edge[0], edge[1] - 1), local_edge_list)
        if edge[1] < shape[1] - 1:
            dfs((edge[0], edge[1] + 1), local_edge_list)

    beacons = []

    for edge in edge_list:
        edge: List
        edge_t = (edge[0], edge[1])

        if edge_t not in visited:
            local_edge_list = []

            dfs(edge_t, local_edge_list)

            logger.info(
                "got local_edge_list for %s of size %s", edge, len(local_edge_list)
            )

            count = 0
            for point in local_edge_list:
                count += 1

                if count % BEACON_DISTANCE == 0:
                    logger.info("ah a fine place to setup a beacon: %s", point)

                    edges[point] = 0

                    beacons.append(point)

    logger.info("beacons placed at %s", beacons)
    logger.info("total beacons: %s", len(beacons))
    draw_img(edges)


# estimate_beacon("a246ddf4-3ded-49b9-bacf-fbf7b700e49e")
estimate_beacon("45b0b2a3-bb7d-4560-8a32-f48d2ba8fd43")
