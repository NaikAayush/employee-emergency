import { Component, Input, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { ApiService } from 'src/app/services/api.service';

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

interface MarkerInfo {
  name: string;
  top: number;
  left: number;
  width: number;
  height: number;
}

interface MapInfo {
  markers: MarkerInfo[];
}

interface ChoiceInfo {
  iconEl: HTMLImageElement;
  iconSrc: string;
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  // uuid of the map to download
  uuid: string;

  private mapDoc: AngularFirestoreDocument<MapInfo>;
  private canvas: fabric.Canvas;

  // icons
  private exitIcon!: HTMLImageElement;
  private entryIcon!: HTMLImageElement;
  private beaconIcon!: HTMLImageElement;

  // choices, so many choices
  private choicesInfo: Record<string, ChoiceInfo> = {
    exit: {
      iconEl: this.exitIcon,
      iconSrc: 'assets/img/exit.svg',
    },
    entry: {
      iconEl: this.entryIcon,
      iconSrc: 'assets/img/entry.svg',
    },
    beacon: {
      iconEl: this.beaconIcon,
      iconSrc: 'assets/img/beacon.svg',
    },
  };
  // update this when updating above
  private choices = ['exit', 'entry', 'beacon'];

  // current position
  currentPos: Point;
  drawnPath: fabric.Rect[] = [];

  constructor(
    private api: ApiService,
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.mapDoc = firestore.doc<MapInfo>('map/unknown');
  }

  ngOnInit() {
    this.canvas = new fabric.Canvas('mapFabricCanvas');
    this.canvas.selection = false;

    this.canvas.height = 0;
    this.canvas.width = 0;

    this.choices.forEach((choice: string) => {
      let choiceInfo = this.choicesInfo[choice];
      choiceInfo.iconEl = new Image();
      choiceInfo.iconEl.src = choiceInfo.iconSrc;
    });

    this.canvas.on('mouse:down', (e: fabric.IEvent) => {
      if (e.pointer === undefined) {
        console.log('aaaaa undefined');
      } else {
        console.log(e.pointer.x, e.pointer.y);
        this.currentPos = new Point(e.pointer.x, e.pointer.y);
      }
    });
  }

  handleSubmitClick(uuid: string) {
    this.uuid = uuid;
    this.mapDoc = this.firestore.doc<MapInfo>('map/' + uuid);
    console.log('hiii', uuid);

    const imgRef = this.storage.ref('map/' + this.uuid + '/orig');
    imgRef
      .getDownloadURL()
      .toPromise()
      .then((res) => {
        console.log(res);

        let orig_img = new Image();
        orig_img.src = res;

        orig_img.onload = () => {
          // this.canvas.setDimensions({
          //   width: orig_img.width,
          //   height: orig_img.height,
          // });
          this.canvas.setWidth(orig_img.width);
          // this.canvas.height = orig_img.height;
          this.canvas.setHeight(orig_img.height);
          // this.canvas.width = orig_img.width;
          this.canvas.setDimensions(
            {
              width: '100%',
              height: '',
            },
            {
              cssOnly: true,
            }
          );

          const height = this.canvas.getHeight();
          console.log('height is ', height);
          this.canvas.hoverCursor = 'auto';

          let orig_img_f = new fabric.Image(orig_img, {
            left: 0,
            top: 0,
            lockMovementX: true,
            lockMovementY: true,
            lockScalingX: true,
            selectable: false,
          });
          this.canvas.add(orig_img_f);

          this.addMarkers();
        };
      })
      .catch((err) => {
        console.log('error go brr', err);
      });
  }

  private addMarkers() {
    this.mapDoc
      .get()
      .toPromise()
      .then((res) => {
        const mapData = res.data();
        console.log(mapData);

        for (let marker of mapData.markers) {
          let iconImg = new fabric.Image(this.choicesInfo[marker.name].iconEl, {
            left: marker.left,
            top: marker.top,
            selectable: false,
            width: marker.width,
            height: marker.height,
          });
          iconImg.data = { name: marker.name };
          this.canvas.add(iconImg);
        }
      });
  }

  private getNearestExit() {
    this.api
      .post(
        '/map/nearestExit',
        { x: this.currentPos.x, y: this.currentPos.y },
        { id_: this.uuid }
      )
      .then((res: any) => {
        console.log(res);

        while (this.drawnPath.length != 0) {
          let rect = this.drawnPath.pop();
          this.canvas.remove(rect);
        }

        if (res.path !== null) {
          for (let point of res.path) {
            var rect = new fabric.Rect({
              left: point[0],
              top: point[1],
              fill: 'red',
              width: 2,
              height: 2,
              angle: 45,
            });

            this.canvas.add(rect);
            this.drawnPath.push(rect);
          }
        } else {
          console.log('Nope. No path found');
        }
      })
      .catch((err) => {
        console.log('Error in getting nearest exit', err);
      });
  }
}
