import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as EasyStar from 'easystarjs';
import * as util from 'util';
import { MapInfo } from '../../views/tabs/employee-map/models/map-info';
import { Point } from '../../views/tabs/employee-map/models/point';

@Injectable({
  providedIn: 'root',
})
export class PathfindingService {
  // A star finder
  private easystar: EasyStar.js;
  private findPathAsync: Function;

  public mapDoc: AngularFirestoreDocument<MapInfo>;

  // image matrix for path finding
  private imgMatrix: Array<Array<number>>;
  // array of exits for pathfinding
  public exits: Point[];

  // uuid
  public uuidMap: string;

  public scale = 5;

  origImg: HTMLImageElement;

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.mapDoc = firestore.doc<MapInfo>('map/unknown');

    this.easystar = new EasyStar.js();
  }

  async initialize(uuidMap: string) {
    this.uuidMap = uuidMap;
    this.mapDoc = this.firestore.doc<MapInfo>('map/' + uuidMap);
    console.log('hiii', uuidMap);

    const imgRef = this.storage.ref('map/' + this.uuidMap + '/orig');
    let res = await imgRef.getDownloadURL().toPromise();

    console.log(res);

    let orig_img = new Image();
    this.origImg = orig_img;
    orig_img.src = res;
    await orig_img.decode();

    await this.getMapGrid();

    return orig_img;
  }

  private async getMapGrid() {
    let res = await this.mapDoc
      .get() // TODO: maybe set cache here for spid
      .toPromise();

    const data = res.data();
    const imgString = data.array;
    const imgArray = JSON.parse(imgString);
    console.log(imgArray);
    this.imgMatrix = imgArray;

    this.easystar.setGrid(this.imgMatrix);
    // this.easystar.setAcceptableTiles(1);
    this.easystar.setAcceptableTiles([1]);
    this.easystar.enableDiagonals();

    // promisify
    this.easystar.findPath[util.promisify.custom] = (
      startX: number,
      startY: number,
      endX: number,
      endY: number
    ) => {
      return new Promise((resolve) => {
        this.easystar.findPath(startX, startY, endX, endY, resolve);
      });
    };

    this.findPathAsync = util.promisify(this.easystar.findPath);

    const scale = this.origImg.height / this.imgMatrix.length;
    console.log(this.imgMatrix.length, this.imgMatrix[0].length, scale);

    // this draws the map with points for each >0 cell
    // for (let i = 0; i < this.imgMatrix.length; ++i) {
    //   for (let j = 0; j < this.imgMatrix[i].length; ++j) {
    //     if (this.imgMatrix[i][j] > 0) {
    //       var rect = new fabric.Rect({
    //         left: j * scale,
    //         top: i * scale,
    //         fill: 'blue',
    //         width: 1,
    //         height: 1,
    //         angle: 0,
    //         selectable: false,
    //       });
    //       this.canvas.add(rect);
    //     }
    //   }
    // }

    this.exits = data.exits;
    console.log(this.exits);

    this.scale = this.origImg.height / this.imgMatrix.length;
  }

  async getPath(
    curpos: Point,
    targets: Point[],
    flipTarget = true,
    scaleTarget = false,
    getMinTarget = false
  ) {
    const scale = this.origImg.height / this.imgMatrix.length;
    const curposActual = {
      x: Math.round(curpos.x / scale),
      y: Math.round(curpos.y / scale),
    };

    const promises = [];
    for (let exit of targets) {
      let exitPoint = { x: exit.x, y: exit.y };
      if (flipTarget) {
        exitPoint = { x: exit.y, y: exit.x };
      }

      if (scaleTarget) {
        exitPoint.x = Math.round(exitPoint.x / scale);
        exitPoint.y = Math.round(exitPoint.y / scale);
      }

      console.log(curposActual.x, curposActual.y, exitPoint.x, exitPoint.y);

      promises.push(
        this.findPathAsync(
          curposActual.x,
          curposActual.y,
          exitPoint.x,
          exitPoint.y
        )
      );
      this.easystar.setIterationsPerCalculation(10000);
      this.easystar.calculate();
    }
    const paths = await Promise.all(promises);

    let minPath: Point[] = null;
    let minPathLength = Number.MAX_SAFE_INTEGER;
    let minTarget: Point = null;
    for (let i = 0; i < paths.length; ++i) {
      const path = paths[i];
      if (path !== null && path.length < minPathLength) {
        minPath = path;
        minPathLength = path.length;
        minTarget = targets[i];
      }
    }

    // scale path
    for (let i = 0; i < minPath.length; ++i) {
      minPath[i].x = minPath[i].x * scale - 5;
      minPath[i].y = minPath[i].y * scale - 5;
    }

    if (getMinTarget) {
      return minTarget;
    }
    return minPath;
  }
}
