import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { ApiService } from 'src/app/command-center/views/tabs/command-center-setup/services/api.service';
import { environment } from 'src/environments/environment';
import { PathfindingService } from '../../../../employee/services/pathfinding/pathfinding.service';
import { ChoiceInfo } from '../../../../employee/views/tabs/employee-map/models/choice-info';

class Floor {
  num: number;
  canvas: fabric.Canvas;

  constructor (num: number) {
    this.num = num;
  }
}

@Component({
  selector: 'app-command-center-simulation-map',
  templateUrl: './command-center-simulation-map.page.html',
  styleUrls: ['./command-center-simulation-map.page.scss'],
})
export class CommandCenterSimulationMapPage implements OnInit {
  noEmp = 10;
  noErt = 5;
  noIncapEmp = 2;

  noFloors = 3;

  private canvas: fabric.Canvas;
  private origImg: HTMLImageElement;
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

  // floor specific
  floors: Floor[] = []
  uidFloorMap: Record<string, number> = {};

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
    for (let i = 0; i < this.noFloors; ++i) {
      this.floors.push(new Floor(i + 1));
    }

    // setup icons
    this.choices.forEach((choice: string) => {
      let choiceInfo = this.choicesInfo[choice];
      choiceInfo.iconEl = new Image();
      choiceInfo.iconEl.src = choiceInfo.iconSrc;
    });

    let orig_img = await this.pathfinding.initialize(this.uuidMap);
    this.origImg = orig_img;

    // TODO: parallelize for spid, using Promise.all
    for (let i = 0; i < this.noFloors; ++i) {
      const canvas = await this.initializeCanvas(i+1);
      this.hideCanvas(canvas);
      this.floors[i].canvas = canvas;
    }

    this.canvas = this.floors[0].canvas;
    this.showCanvas(this.canvas);

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

  private hideCanvas(canvas: fabric.Canvas) {
    // canvas.getElement().style.display = "none";
    canvas.getElement().parentElement.style.display = "none";
    this.removeEventHandlers(canvas);
    canvas.calcOffset();
  }

  private showCanvas(canvas: fabric.Canvas) {
    // canvas.getElement().style.display = "block";
    canvas.getElement().parentElement.style.display = "block";
    this.addEventHandlers(canvas);
    canvas.calcOffset();
  }

  newFloorSelect(num: number) {
    console.log(num, typeof num, num - 1);

    const nextCanvas = this.floors[num - 1].canvas;

    this.showCanvas(nextCanvas);

    this.hideCanvas(this.canvas);

    this.canvas = nextCanvas;

  }

  async initializeCanvas(num: number) {
    // initialize canvas
    const canvas = new fabric.Canvas(`mapFabricCanvas${num}`, { renderOnAddRemove: false });
    canvas.selection = false;

    canvas.height = 0;
    canvas.width = 0;

    canvas.setWidth(this.origImg.width);
    // canvas.height = this.origImg.height;
    canvas.setHeight(this.origImg.height);
    // canvas.width = this.origImg.width;
    canvas.setDimensions(
      {
        width: '80%',
        height: '',
      },
      {
        cssOnly: true,
      }
    );

    const height = canvas.getHeight();
    console.log('height is ', height);
    canvas.hoverCursor = 'auto';

    let orig_img_f = new fabric.Image(this.origImg, {
      left: 0,
      top: 0,
      lockMovementX: true,
      lockMovementY: true,
      lockScalingX: true,
      selectable: false,
    });
    canvas.add(orig_img_f);

    this.addMarkers();

    return canvas;
  }

  private addEventHandlers(canvas: fabric.Canvas) {
    canvas.on('mouse:wheel', (opt) => {
      if (this.canvas != canvas) {
        return;
      }

      let delta = (opt.e as WheelEvent).deltaY;
      let zoom = canvas.getZoom();
      zoom *= 0.999 ** delta;
      if (zoom > 20) zoom = 20;
      if (zoom < 0.01) zoom = 0.01;
      canvas.zoomToPoint(new fabric.Point((opt.e as WheelEvent).offsetX, (opt.e as WheelEvent).offsetY), zoom);
      opt.e.preventDefault();
      opt.e.stopPropagation();
      canvas.requestRenderAll();
      // var vpt = canvas.viewportTransform;
      // if (zoom < 400 / 1000) {
      //   vpt[4] = 200 - 1000 * zoom / 2;
      //   vpt[5] = 200 - 1000 * zoom / 2;
      // } else {
      //   if (vpt[4] >= 0) {
      //     vpt[4] = 0;
      //   } else if (vpt[4] < canvas.getWidth() - 1000 * zoom) {
      //     vpt[4] = canvas.getWidth() - 1000 * zoom;
      //   }
      //   if (vpt[5] >= 0) {
      //     vpt[5] = 0;
      //   } else if (vpt[5] < canvas.getHeight() - 1000 * zoom) {
      //     vpt[5] = canvas.getHeight() - 1000 * zoom;
      //   }
      // }
    });
    const outsideClass = this;

    canvas.on('mouse:down', function(opt) {
      if (outsideClass.canvas != canvas) {
        return;
      }

      const evt = opt.e as MouseEvent;
      if (evt.altKey === true) {
        this.isDragging = true;
        this.selection = false;
        this.lastPosX = evt.clientX;
        this.lastPosY = evt.clientY;
      }
    });

    canvas.on('mouse:move', function(opt) {
      if (outsideClass.canvas != canvas) {
        return;
      }

      if (this.isDragging) {
        const e = opt.e as MouseEvent;
        const vpt = this.viewportTransform;
        vpt[4] += e.clientX - this.lastPosX;
        vpt[5] += e.clientY - this.lastPosY;
        this.requestRenderAll();
        this.lastPosX = e.clientX;
        this.lastPosY = e.clientY;
      }
    });

    canvas.on('mouse:up', function() {
      if (outsideClass.canvas != canvas) {
        return;
      }

      // on mouse up we want to recalculate new interaction
      // for all objects, so we call setViewportTransform
      this.setViewportTransform(this.viewportTransform);
      this.isDragging = false;
      this.selection = true;
    });
  }

  private removeEventHandlers(canvas: fabric.Canvas) {
    canvas.off('mouse:wheel');
    canvas.off('mouse:down');
    canvas.off('mouse:move');
    canvas.off('mouse:up');
  }

  setupSimulation(numEmp: number, numErt: number, numEmpImm: number) {
    // cleanup old markers
    for (let uid of this.userIds) {
      for (let floor of this.floors) {
        try {
          floor.canvas.remove(this.userMarkers[uid]);
        } catch {
          console.log("not this time", floor.num, uid)
        }
      }
    }

    this.totalEmpNumber = numEmp + numEmpImm;
    this.totalERTNumber = numErt;

    this.totalERTIncapacitated = 0;
    this.totalEmpIncapacitated = 0;

    this.totalEmpExited = 0;
    this.totalErtExited = 0;

    this.uidFloorMap = {};
    let curFloor = 0;

    const userIds = [];
    for (let i = 1; i <= numEmp; ++i) {
      const uid = `emp${i}`;
      userIds.push(uid);

      this.uidFloorMap[uid] = curFloor;
      curFloor = (curFloor + 1) % this.noFloors;
    }
    for (let i = 1; i <= this.totalERTNumber - numEmpImm; ++i) {
      const uid = `ert${i}`;
      userIds.push(uid);

      this.uidFloorMap[uid] = curFloor;
      curFloor = (curFloor + 1) % this.noFloors;
    }

    for (let i = 1; i <= numEmpImm; ++i) {
      const empUid = `emp${numEmp + i}`;
      const ertUid = `ert${numErt - numEmpImm + i}`;

      userIds.push(empUid);
      userIds.push(ertUid);

      this.uidFloorMap[empUid] = curFloor;
      this.uidFloorMap[ertUid] = curFloor;
      curFloor = (curFloor + 1) % this.noFloors;
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

          for (let floor of this.floors) {
            floor.canvas.add(iconImg);
          }
        }
      });
  }

  private startMonitoring() {
    this.userIds.forEach((uid) => {
      const listenWs = new WebSocket(
        `${environment.wsEndpoint}listen?id=${uid}`
      );

      listenWs.addEventListener('open', function() {
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

            this.floors[this.uidFloorMap[uid]].canvas.add(this.userMarkers[uid]);
          }
        } catch (error) {
          console.log('Bad data from WS');
        }
      });
    });
  }
}
