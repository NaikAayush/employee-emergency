import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
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
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  title = 'command-center';

  private canvas!: fabric.Canvas;

  // private contextF!: CanvasRenderingContext2D;
  private origImg!: HTMLImageElement;
  private mapImg!: HTMLImageElement;

  private mapId: string = '';
  private mapDoc: AngularFirestoreDocument<MapInfo>;

  // private markerLocs: any = {};
  public markerChoice: string = 'exit';

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
  // for use in ngFor ig
  private choices = ['exit', 'entry', 'beacon'];

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

        const iconSize = 20;
        let x = e.pointer.x - iconSize / 2;
        let y = e.pointer.y - iconSize / 2;
        let intersects = false;
        let intObject: fabric.Object | null = null;

        this.canvas.getObjects('image').some((obj) => {
          let inter = obj.intersectsWithRect(
            new fabric.Point(x, y),
            new fabric.Point(x + iconSize, y + iconSize)
          );
          if (inter) {
            intersects = true;
            intObject = obj;
            return true;
          }
          return false;
        });

        if (intersects && intObject !== null) {
          this.canvas.remove(intObject);
        } else {
          let iconImg = new fabric.Image(
            this.choicesInfo[this.markerChoice].iconEl,
            {
              left: x,
              top: y,
              selectable: false,
              width: iconSize,
              height: iconSize,
            }
          );
          iconImg.data = { name: this.markerChoice };
          this.canvas.add(iconImg);
        }
      }
    });
  }

  private handleMouseEvent(e: fabric.IEvent) {}

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

  private uploadImage(img: HTMLImageElement, id: string, name: string) {
    const imgPath = '/map/' + id + '/' + name;
    const ref = this.storage.ref(imgPath);
    fetch(img.src)
      .then((res) => res.blob())
      .then((res) => {
        const task = ref.put(res, { contentType: 'image/png' });
        task
          .percentageChanges()
          .toPromise()
          .then((value) => {
            console.log(name + ' Image upload done this much', value);
          });
        task.then((a) => {
          console.log(name + ' Image upload done', a.totalBytes, a.state);
        });
      });
  }

  submit() {
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

    this.uploadImage(this.origImg, this.mapId, 'orig');
    this.uploadImage(this.mapImg, this.mapId, 'map');

    const mapInfo: MapInfo = {
      markers: markers,
    };
    console.log(mapInfo);
    this.mapDoc.set(mapInfo);
  }
}
