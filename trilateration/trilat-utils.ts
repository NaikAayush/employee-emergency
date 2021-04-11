const trilat = require('trilat');

export function initializeBeacons(coords: Array<Array<number>>) {
    let newInput = [];

    coords.forEach((coord) => {
        newInput.push([coord[0], coord[1], 0])
    })

    return newInput
}

export function getLocation(beacons: Array<Array<number>>, distances: Array<number>) {
    if (beacons.length != distances.length) {
        throw Error("Distances given do not match array length")
    }

    for (let i: number = 0; i < beacons.length; ++i) {
        beacons[i][2] = distances[i]
    }

    const pos = trilat(beacons)

    return pos
}
