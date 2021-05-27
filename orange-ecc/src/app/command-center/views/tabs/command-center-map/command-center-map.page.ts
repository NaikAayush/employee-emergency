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
  userIds: string[] = ['emp1', 'emp2', 'emp3', 'emp4', 'ert1', 'ert2', 'ert3'];

  // stats
  totalEmpNumber = 4;
  totalERTNumber = 3;

  totalEmpIncapacitated = 0;
  totalERTIncapacitated = 0;

  totalEmpExited = 0;
  totalErtExited = 0;

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
  // to check if an employee is stuck
  private lastChanged: Record<string, number> = {};
  private exited: Record<string, boolean> = {};

  constructor(private pathfinding: PathfindingService) {
    this.userMarkers = {};
  }

  async ngOnInit() {
    // setup last changed
    this.userIds.forEach((uid) => {
      this.lastChanged[uid] = new Date().getTime();
      this.exited[uid] = false;
    });

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

    setInterval(() => {
      let empIncap = 0;
      let ertIncap = 0;
      let empExited = 0;
      let ertExited = 0;

      Object.entries(this.lastChanged).forEach(([key, value]) => {
        const curTime = new Date().getTime();

        if (this.exited[key]) {
          if (key.startsWith('emp')) {
            empExited++;
          } else if (key.startsWith('ert')) {
            ertExited++;
          }
        }

        if (curTime - value > 5000 && !this.exited[key]) {
          console.log('panikk emp is stuck', key);

          if (key.startsWith('emp')) {
            empIncap++;
          } else if (key.startsWith('ert')) {
            ertIncap++;
          }

          // fabric.util.animateColor("black", "red");
          this.userMarkers[key].animate(
            { scaleX: 2, scaleY: 2, fill: 'red' },
            {
              duration: 500,
              onChange: this.canvas.requestRenderAll.bind(this.canvas),
            }
          );

          // this.userMarkers[key].add(new fabric.Text("INCAPACITATED", {
          //   fontSize: 5,
          //   originY: "center",
          //   originX: "center"
          // }));
        } else {
          this.userMarkers[key].animate(
            { scaleX: 1, scaleY: 1 },
            {
              duration: 500,
              onChange: this.canvas.requestRenderAll.bind(this.canvas),
            }
          );
          // console.log("size", this.userMarkers[key].size());
        }
      });

      this.totalEmpIncapacitated = empIncap;
      this.totalERTIncapacitated = ertIncap;

      this.totalEmpExited = empExited;
      this.totalErtExited = ertExited;
    }, 2000);
  }

  private addMarkers() {
    this.pathfinding.mapDoc
      .get()
      .toPromise()
      .then(async (res) => {
        const mapData = res.data();
        // console.log(mapData);

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
      const listenWs = new WebSocket(
        `${environment.wsEndpoint}listen?id=${uid}`
      );

      listenWs.addEventListener('open', function () {
        listenWs.send('Hello Server!');
      });

      listenWs.addEventListener('message', (event) => {
        try {
          let data = JSON.parse(event.data);

          const x = data.x - 5;
          const y = data.y - 5;

          let exited = false;
          for (let exit of this.pathfinding.exits) {
            if (
              Math.abs(exit.y * this.pathfinding.scale - x) < 50 &&
              Math.abs(exit.x * this.pathfinding.scale - y) < 50
            ) {
              exited = true;
              break;
            }
          }
          this.exited[uid] = exited;

          if (this.userMarkers[uid]) {
            // this.userMarkers[uid].animate('left', x, {
            //   duration: 500,
            //   onChange: this.canvas.requestRenderAll.bind(this.canvas),
            //   easing: fabric.util.ease.easeInQuad,
            // });

            // this.userMarkers[uid].animate('top', y, {
            //   duration: 500,
            //   onChange: this.canvas.requestRenderAll.bind(this.canvas),
            //   easing: fabric.util.ease.easeInQuad,
            // });

            this.userMarkers[uid].animate(
              { left: x, top: y },
              {
                duration: 500,
                onChange: this.canvas.requestRenderAll.bind(this.canvas),
                easing: fabric.util.ease.easeInQuad,
              }
            );

            if (
              Math.abs(this.userMarkers[uid].left - x) > 1 ||
              Math.abs(this.userMarkers[uid].top - y) > 1
            ) {
              this.lastChanged[uid] = new Date().getTime();
            }
          } else {
            this.lastChanged[uid] = new Date().getTime();
            let color = 'black';

            if (data.ert) {
              color = 'purple';
            }

            let reect = new fabric.Rect({
              height: 10,
              width: 17,
              fill: color,
              originX: 'center',
              originY: 'center',
              shadow: new fabric.Shadow({
                color: 'rgba(0,0,0,0.3)',
                offsetX: 1,
                offsetY: 1,
                blur: 5,
              }),
            });
            let text = new fabric.Text(data.name, {
              fontSize: 7,
              top: 0,
              originX: 'center',
              originY: 'center',
              fill: 'white',
              shadow: new fabric.Shadow({
                color: 'rgba(0,0,0,0.3)',
                offsetX: 1,
                offsetY: 1,
                blur: 5,
              }),
              cornerSize: 1,
              backgroundColor: color,
              fontWeight: 'bold',
            });

            this.userMarkers[uid] = new fabric.Group([reect, text], {
              left: x,
              top: y,
              selectable: false,
            });

            this.canvas.add(this.userMarkers[uid]);
          }
        } catch (error) {
          console.log('Bad data from WS');
        }
      });
    });
  }
}
