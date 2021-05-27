import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { ApiService } from 'src/app/command-center/views/tabs/command-center-setup/services/api.service';
import { environment } from 'src/environments/environment';
import { PathfindingService } from '../../../../employee/services/pathfinding/pathfinding.service';
import { ChoiceInfo } from '../../../../employee/views/tabs/employee-map/models/choice-info';

@Component({
  selector: 'app-command-center-simulation-map',
  templateUrl: './command-center-simulation-map.page.html',
  styleUrls: ['./command-center-simulation-map.page.scss'],
})
export class CommandCenterSimulationMapPage implements OnInit {
  noEmp = 10;
  noErt = 5;
  noIncapEmp = 2;
  private canvas: fabric.Canvas;
  uuidMap: string = '45b0b2a3-bb7d-4560-8a32-f48d2ba8fd43';
  // user ids to monitor
  userIds: string[] = [
    'emp1',
    'emp2',
    'emp3',
    'emp4',
    'emp5',
    'emp6',
    'emp7',
    'ert1',
    'ert2',
    'ert3',
    'ert4',
    'ert5',
  ];

  // stats
  totalEmpNumber = 5;
  totalERTNumber = 5;

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

  constructor(
    private pathfinding: PathfindingService,
    private api: ApiService
  ) {
    this.userMarkers = {};
  }

  async ngOnInit() {
    // initialize canvas
    this.canvas = new fabric.Canvas('mapFabricCanvas', { renderOnAddRemove: false });
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
        width: '80%',
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
            { scaleX: 2, scaleY: 2 },
            {
              duration: 500,
              onChange: this.canvas.requestRenderAll.bind(this.canvas),
            }
          );
          if (key.startsWith('emp')) {
            this.userMarkers[key].getObjects()[1].backgroundColor = "red";
          }

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
          if (key.startsWith('emp')) {
            const objs = this.userMarkers[key].getObjects();
            objs[1].backgroundColor = objs[0].fill as string;
          }
          // console.log("size", this.userMarkers[key].size());
        }
      });

      this.totalEmpIncapacitated = empIncap;
      this.totalERTIncapacitated = ertIncap;

      this.totalEmpExited = empExited;
      this.totalErtExited = ertExited;
    }, 2000);

    // this.setupSimulation(this.noEmp, this.noErt, this.noIncapEmp);
  }

  setupSimulation(numEmp: number, numErt: number, numEmpImm: number) {
    this.totalEmpNumber = numEmp + numEmpImm;
    this.totalERTNumber = numErt;

    this.totalERTIncapacitated = 0;
    this.totalEmpIncapacitated = 0;

    this.totalEmpExited = 0;
    this.totalErtExited = 0;

    const userIds = [];
    for (let i = 1; i <= this.totalEmpNumber; ++i) {
      userIds.push(`emp${i}`);
    }
    for (let i = 1; i <= this.totalERTNumber; ++i) {
      userIds.push(`ert${i}`);
    }

    for (let uid of this.userIds) {
      this.canvas.remove(this.userMarkers[uid]);
    }

    this.userMarkers = {}
    this.userIds = userIds;

    console.log("Monitoring UIDs", this.userIds);

    // setup last changed
    this.userIds.forEach((uid) => {
      this.lastChanged[uid] = new Date().getTime();
      this.exited[uid] = false;
    });

    this.startMonitoring();
  }

  async startSimulation() {
    const resp = await this.api.post(`/simulate?id_=${this.uuidMap}`, {
      num_emp: this.noEmp,
      num_incap_emp: this.noIncapEmp,
      num_ert: this.noErt,
    });
    console.log("Response from simulate: ", resp);
  }

  async simulate() {
    this.setupSimulation(this.noEmp, this.noErt, this.noIncapEmp);
    await this.startSimulation();
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
              Math.abs(exit.y * this.pathfinding.scale - x) < 20 &&
              Math.abs(exit.x * this.pathfinding.scale - y) < 20
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
                duration: 200,
                onChange: this.canvas.requestRenderAll.bind(this.canvas)
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
