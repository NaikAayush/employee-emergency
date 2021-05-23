import { Injectable } from '@angular/core';
import * as trilat from 'trilat';

@Injectable({
  providedIn: 'root'
})
export class TrilaterationService {
  beacons: Array<Array<number>>;

  constructor() { }

  initializeBeacons(coords: Array<Array<number>>): Array<Array<number>> {
    let newInput = [];

    coords.forEach((coord) => {
      newInput.push([coord[0], coord[1], 0]);
    });

    this.beacons = newInput;
    return this.beacons;
  }

  getLocation(
    distances: Array<number>
  ): Array<number> {
    if (this.beacons.length != distances.length) {
      throw Error('Distances given do not match array length');
    }

    for (let i: number = 0; i < this.beacons.length; ++i) {
      this.beacons[i][2] = distances[i];
    }

    var pos1 = trilat(this.beacons);

    return pos1;
  }
}
