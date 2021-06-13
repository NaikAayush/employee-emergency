import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { fabric } from 'fabric';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { v4 as uuidv4 } from 'uuid';

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

interface ChoiceInfo {
  iconEl: HTMLImageElement;
  iconSrc: string;
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

@Component({
  selector: 'app-command-center-upload-map',
  templateUrl: './command-center-upload-map.component.html',
  styleUrls: ['./command-center-upload-map.component.scss'],
})
export class CommandCenterUploadMapComponent implements OnInit {
  view = false;
  title = 'command-center';

  private canvas!: fabric.Canvas;

  // private contextF!: CanvasRenderingContext2D;
  private origImg!: HTMLImageElement;
  private mapImg!: HTMLImageElement;

  private mapId: string = '';
  private mapDoc: AngularFirestoreDocument<MapInfo>;

  // private markerLocs: any = {};
  public markerChoice: string = 'exit';

  // store custom names
  public otherName: string = 'Other';
  private otherNameCounter: Record<string, number> = {};

  private debugCollision = false;

  // icons
  private exitIcon!: HTMLImageElement;
  private entryIcon!: HTMLImageElement;
  private beaconIcon!: HTMLImageElement;
  private otherIcon!: HTMLImageElement;

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
    other: {
      iconEl: this.otherIcon,
      iconSrc: 'assets/img/ping.svg',
    }
  };
  // for use in ngFor ig
  private choices = ['exit', 'entry', 'beacon', 'other'];

  constructor(
    private api: ApiService,
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.mapDoc = firestore.doc<MapInfo>('map/unknown');
  }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('mapFabricCanvas');
    this.canvas.selection = false;
    this.canvas.on('mouse:down', (e: fabric.IEvent) => {
      if (e.pointer === undefined) {
        console.log('aaaaa undefined');
      } else {
        console.log(e.pointer.x, e.pointer.y, this.markerChoice);

        const iconSize = 15;
        let x = e.pointer.x;
        let y = e.pointer.y;
        let intersects = false;
        let intObject!: fabric.Object;
        const intTl = new fabric.Point(x - iconSize / 2, y - iconSize);
        const intBr = new fabric.Point(x + iconSize / 4, y + iconSize / 2);
        if (this.debugCollision) {
          this.canvas.add(new fabric.Circle({ top: intTl.y, left: intTl.x, height: 10, width: 10, fill: "blue", radius: 5, selectable: false }));
          this.canvas.add(new fabric.Circle({ top: intBr.y, left: intBr.x, height: 10, width: 10, fill: "blue", radius: 5, selectable: false }));
        }

        this.canvas.getObjects().some((o) => {
          // ignore debug objects (above)
          if ((o instanceof fabric.Circle)) {
            return false;
          }

          let obj: fabric.Object = o;
          // if (o instanceof fabric.Group) {
          // obj = o.getObjects()[0];
          // console.log(obj, o, o.getObjects());
          // }
          let inter = obj.intersectsWithRect(
            intTl,
            intBr,
            // false,
            // true
          );
          if (inter) {
            intersects = true;
            intObject = o;
            return true;
          }
          return false;
        });

        // console.log(intObject, intersects);

        if (
          intersects &&
          intObject !== null &&
          intObject.left !== undefined &&
          intObject.top !== undefined
        ) {
          // console.log(x, y, intObject.left, intObject.top);
          const tl = new fabric.Point(x - iconSize / 2, y - iconSize / 2);
          const br = new fabric.Point(
            x,
            y
          );

          if (this.debugCollision) {
            this.canvas.add(new fabric.Circle({ top: tl.y, left: tl.x, height: 10, width: 10, fill: "red", radius: 4, selectable: false }));
            this.canvas.add(new fabric.Circle({ top: br.y, left: br.x, height: 10, width: 10, fill: "red", radius: 4, selectable: false }));
          }
          const smolRect = new fabric.Rect({
            left: intObject.left,
            top: intObject.top,
            width: iconSize / 2,
            height: iconSize / 2,
            originX: "center",
            originY: "center"
          });
          if (smolRect.intersectsWithRect(tl, br)) {
            this.canvas.remove(intObject);

            // decrement counter when deleting - does not work because
            //    the deleted one might not be the last one, so there
            //    will be duplicates
            // if (intObject.data.otherNameOrig) {
            //   this.otherNameCounter[intObject.data.otherNameOrig] -= 1;
            // }
          }
        } else {
          let markerIcon: fabric.Object;

          if (this.markerChoice == 'other') {
            // other name
            let otherName = this.otherName;

            if (this.otherNameCounter[this.otherName]) {
              this.otherNameCounter[this.otherName]++;

              otherName = this.otherName + " " + this.otherNameCounter[this.otherName];
            } else {
              this.otherNameCounter[this.otherName] = 1;
            }

            console.log("Other name: ", otherName)
            // end other name

            let iconImg = new fabric.Image(
              this.choicesInfo[this.markerChoice].iconEl,
              {
                originX: "center",
                originY: "center"
              }
            );
            iconImg.scaleToHeight(iconSize);
            iconImg.scaleToWidth(iconSize);

            let text = new fabric.Text(otherName, {
              fontSize: 9,
              top: iconSize,
              originX: "center",
              originY: "center"
            });

            markerIcon = new fabric.Group([iconImg, text], {
              left: x,
              top: y,
              selectable: false,
              originX: "center",
              originY: "center"
            });
            markerIcon.data = { otherNameOrig: this.otherName };

          } else {
            markerIcon = new fabric.Image(
              this.choicesInfo[this.markerChoice].iconEl,
              {
                left: x,
                top: y,
                originX: "center",
                originY: "center",
                selectable: false,
                // width: iconSize,
                // height: iconSize,
              }
            );
            markerIcon.scaleToHeight(iconSize);
            markerIcon.scaleToWidth(iconSize);
            markerIcon.data = {};
          }
          markerIcon.data.name = this.markerChoice;
          this.canvas.add(markerIcon);
        }
      }
    });
  }

  private handleMouseEvent(e: fabric.IEvent) { }

  ngAfterViewInit(): void {
    this.canvas.height = 0;
    this.canvas.width = 0;

    this.exitIcon = new Image();
    this.exitIcon.src = 'assets/img/exit.svg';

    this.choices.forEach((choice: string) => {
      let choiceInfo = this.choicesInfo[choice];
      choiceInfo.iconEl = new Image();
      choiceInfo.iconEl.src = choiceInfo.iconSrc;
    });
  }

  handleFileInput(target: any) {
    this.view = true;
    this.mapId = uuidv4();
    this.mapDoc = this.firestore.doc<MapInfo>('map/' + this.mapId);

    let files: FileList = target.files as FileList;

    let file = files[0];
    console.log(file);

    let formData = new FormData();
    formData.append('file', file);

    this.api
      .post('/map/processImage', formData)
      .then((res: any) => {
        let orig_img = new Image();
        orig_img.src = 'data:image/jpg;base64,' + res.orig_img;

        orig_img.onload = () => {
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
          this.canvas.hoverCursor = 'pointer';

          let orig_img_f = new fabric.Image(orig_img, {
            left: 0,
            top: 0,
            lockMovementX: true,
            lockMovementY: true,
            lockScalingX: true,
            selectable: false,
          });
          this.canvas.add(orig_img_f);
        };

        let map_img = new Image();
        map_img.src = 'data:image/jpg;base64,' + res.proc_img;

        this.origImg = orig_img;
        this.mapImg = map_img;
      })
      .catch((err) => {
        console.log('error in upload image', err);
      });
    // TODO: aaaaaaaaaaaaaa
  }

  private async uploadImage(
    img: HTMLImageElement,
    id: string,
    name: string,
    cback?: Function
  ) {
    const imgPath = '/map/' + id + '/' + name;
    const ref = this.storage.ref(imgPath);
    const res = await (await fetch(img.src)).blob();
    const value = await ref.put(res, { contentType: 'image/png' });
    console.log(name + ' Image upload done', value.state, value.totalBytes);

    if (cback) {
      cback();
    }
  }

  async submit() {
    const markers: MarkerInfo[] = [];
    this.canvas.forEachObject((obj) => {
      if (obj.data !== undefined) {
        if (
          obj.left !== undefined &&
          obj.top !== undefined &&
          obj.width !== undefined &&
          obj.height !== undefined
        ) {
          let newMarker: MarkerInfo = {
            name: obj.data.name,
            top: obj.top,
            left: obj.left,
            width: obj.width,
            height: obj.height,
          };
          markers.push(newMarker);
        } else {
          console.log('Got some undefined in this object!!', obj);
        }
      }
    });

    const mapInfo: MapInfo = {
      markers: markers,
    };
    console.log(mapInfo);
    await Promise.all([
      this.uploadImage(this.origImg, this.mapId, 'orig'),
      this.uploadImage(this.mapImg, this.mapId, 'map'),
      this.mapDoc.set(mapInfo),
    ]);

    this.api
      .get('/map/processMarkers', { id_: this.mapId })
      .then((res) => {
        console.log('Process markers done', res);
      })
      .catch((err) => {
        console.log('Error in process markers', err);
      });
  }
}
