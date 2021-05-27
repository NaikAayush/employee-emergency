"""Module for processing of map images
"""

from typing import Tuple
import cv2
import imutils
import numpy as np


IMAGE_WIDTH = 800
MAP_WIDTH = 150
DILATE_SIZE_VERT = 8
DILATE_SIZE_HOR = 11


def _get_yellow(img: np.ndarray):
    """The maps provided by EY have the paths (corridors)
    highlighted in yellow. So we extract just that.
    """
    img_hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

    lower = np.array([22, 93, 0], dtype="uint8")
    upper = np.array([45, 255, 255], dtype="uint8")
    mask = cv2.inRange(img_hsv, lower, upper)

    return mask


def _make_paths_better(img: np.ndarray):
    """The paths in EY map have a person logo/icon
    at regular intervals. Those holes have to be
    filled for path finding to work.
    """
    # img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    kernel = np.ones((1, DILATE_SIZE_HOR), np.uint8)  # horizontal kernel
    d_im = cv2.dilate(img, kernel, iterations=1)
    e_im = cv2.erode(d_im, kernel, iterations=1)

    kernel = np.ones((DILATE_SIZE_VERT, 1), np.uint8)  # vertical kernel
    d_im = cv2.dilate(e_im, kernel, iterations=1)
    e_im = cv2.erode(d_im, kernel, iterations=1)

    return e_im


def _resize_image(img: np.ndarray, nearest=True, width=IMAGE_WIDTH):
    if nearest:
        return imutils.resize(img, width=width, inter=cv2.INTER_NEAREST)
    else:
        return imutils.resize(img, width=width, inter=cv2.INTER_AREA)


def process_map(img: np.ndarray) -> Tuple[np.ndarray, np.ndarray]:
    smol_img = _resize_image(img, nearest=False)
    processed_img = _resize_image(
        _make_paths_better(_get_yellow(smol_img)), width=MAP_WIDTH
    )
    return smol_img, processed_img


if __name__ == "__main__":

    def draw_img(img):

        cv2.imshow("image", img)
        cv2.waitKey(0)
        cv2.destroyAllWindows()

    img = cv2.imread("map-1.png")

    draw_img(img)

    img2, img3 = process_map(img)

    draw_img(img2)
    draw_img(img3)
