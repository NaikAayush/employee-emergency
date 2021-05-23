import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { PathfindingService } from 'src/app/employee/services/pathfinding/pathfinding.service';
import { ChoiceInfo } from 'src/app/employee/views/tabs/employee-map/models/choice-info';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-command-center-map',
  templateUrl: './command-center-map.page.html',
  styleUrls: ['./command-center-map.page.scss'],
})
export class CommandCenterMapPage implements OnInit {
  private canvas: fabric.Canvas;
  uuidMap: string = '45b0b2a3-bb7d-4560-8a32-f48d2ba8fd43';
  // user ids to monitor
  userIds: string[] = ["emp1", "emp2", "emp3", "emp4", "ert1", "ert2", "ert3"];

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
  private choices = ['exit', 'entry', 'beacon'];

  // user markers
  private userMarkers: Record<string, fabric.Group>;

  constructor(private pathfinding: PathfindingService) {
    this.userMarkers = {};
  }

  async ngOnInit() {
    // initialize canvas
    this.canvas = new fabric.Canvas('mapFabricCanvas');
    this.canvas.selection = false;

    this.canvas.height = 0;
    this.canvas.width = 0;

    // setup icons
    this.choices.forEach((choice: string) => {
      let choiceInfo = this.choicesInfo[choice];
      choiceInfo.iconEl = new Image();
      choiceInfo.iconEl.src = choiceInfo.iconSrc;
    });

    let orig_img = await this.pathfinding.initialize(this.uuidMap);

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

    this.startMonitoring();
  }

  private addMarkers() {
    this.pathfinding.mapDoc
      .get()
      .toPromise()
      .then(async (res) => {
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

  private startMonitoring() {
    this.userIds.forEach((uid) => {
      const listenWs = new WebSocket(`${environment.wsEndpoint}listen?id=${uid}`);

      listenWs.addEventListener('open', function() {
        listenWs.send('Hello Server!');
      });

      listenWs.addEventListener('message', (event) => {
        try {
          let data = JSON.parse(event.data);
          console.log('Message from server ', data);

          if (this.userMarkers[uid]) {
            console.log("found");

            this.userMarkers[uid].animate("left", data.x, {
              duration: 500,
              onChange: this.canvas.requestRenderAll.bind(this.canvas),
              easing: fabric.util.ease.easeInQuad
            });

            this.userMarkers[uid].animate("top", data.y, {
              duration: 500,
              onChange: this.canvas.requestRenderAll.bind(this.canvas),
              easing: fabric.util.ease.easeInQuad
            });

          } else {
            let color = "black";

            if (data.ert) {
              color = "purple";
            }

            let reect = new fabric.Rect({
              height: 10,
              width: 17,
              fill: color,
              originX: "center",
              originY: "center",
              shadow: new fabric.Shadow({ color: 'rgba(0,0,0,0.3)', offsetX: 1, offsetY: 1, blur: 5 })
            });
            let text = new fabric.Text(data.name, {
              fontSize: 7,
              top: 0,
              originX: "center",
              originY: "center",
              fill: "white",
              shadow: new fabric.Shadow({ color: 'rgba(0,0,0,0.3)', offsetX: 1, offsetY: 1, blur: 5 }),
              cornerSize: 1,
              backgroundColor: color,
              fontWeight: "bold"
            });

            this.userMarkers[uid] = new fabric.Group([reect, text], {
              left: data.x - 10,
              top: data.y - 5,
              selectable: false
            });

            this.canvas.add(this.userMarkers[uid]);
          }
        } catch (error) {
          console.log('Bad data from WS', error);
        }
      });
    });
  }

}
