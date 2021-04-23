"""Module for processing of map images
"""

import cv2
import imutils
import numpy as np


IMAGE_WIDTH = 500


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

    kernel = np.ones((1,40), np.uint8)  # horizontal kernel
    d_im = cv2.dilate(img, kernel, iterations=1)
    e_im = cv2.erode(d_im, kernel, iterations=1)


    kernel = np.ones((40,1), np.uint8)  # vertical kernel
    d_im = cv2.dilate(e_im, kernel, iterations=1)
    e_im = cv2.erode(d_im, kernel, iterations=1)

    return e_im


def _resize_image(img: np.ndarray):
    return imutils.resize(img, width=IMAGE_WIDTH, inter=cv2.INTER_NEAREST)


def process_map(img: np.ndarray):
    return _resize_image(_make_paths_better(_get_yellow(img)))


if __name__ == "__main__":
    from matplotlib import pyplot as plt

    def draw_img(img, color=True):

        plt.figure(figsize = (15, 15))
        if color:
            plt.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
        else:
            plt.imshow(img, cmap="Greys")
        plt.show(block=False)
        input()
        plt.close()

    img = cv2.imread("map-1.png")

    draw_img(img)

    img2 = _get_yellow(img)

    # draw_img(img2)

    img3 = _make_paths_better(img2)

    # draw_img(img3)

    img4 = _resize_image(img3)

    draw_img(img4)
