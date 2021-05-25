import { Component, ChangeDetectorRef, Input } from '@angular/core';
import { IBeacon, IBeaconPluginResult } from '@ionic-native/ibeacon/ngx';
import { Platform } from '@ionic/angular';
import {
  WifiScanResultsOptions,
  WifiWizard2,
} from '@ionic-native/wifi-wizard-2/ngx';
import {
  Magnetometer,
  MagnetometerReading,
} from '@ionic-native/magnetometer/ngx';
import {
  DeviceOrientation,
  DeviceOrientationCompassHeading,
} from '@ionic-native/device-orientation/ngx';

import { interval } from 'rxjs';

import { fabric } from 'fabric';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

import { Point } from './models/point';
import { MarkerInfo } from './models/marker-info';
import { MapInfo } from './models/map-info';
import { ChoiceInfo } from './models/choice-info';
import { TrilaterationService } from 'src/app/employee/services/trilateration/trilateration.service';
import { WebsocketService } from 'src/app/employee/services/websocket/websocket.service';
import { WebSocketSubject } from 'rxjs/webSocket';
import { PathfindingService } from 'src/app/employee/services/pathfinding/pathfinding.service';

class AccHistory {
  accHistory: number[]
  pointer: number

  constructor (public size: number = 10) {
    this.pointer = 0;
    this.accHistory = new Array(size).fill(0.0);
  }

  addValue(val: number) {
    this.accHistory[this.pointer] = val;

    let ptr = this.pointer;
    ++ptr;

    this.pointer = ptr % this.size;
  }

  getAt(ind: number) {
    return this.accHistory[(this.pointer + ind) % this.size]
  }

  getBack(ind: number) {
    return this.accHistory[(this.pointer - 1 - ind + this.size) % this.size]
  }
}

@Component({
  selector: 'app-employee-map',
  templateUrl: './employee-map.page.html',
  styleUrls: ['./employee-map.page.scss'],
})
export class EmployeeMapPage {
  data;
  beaconListData: MarkerInfo[] = [];
  mainBeaconData = [];
  //////////////////////////////////////////////
  //////////////////////////////////////////////
  //////////////////////////////////////////////
  //////////////////////////////////////////////
  // uuidMap of the map to download
  uuidMap: string = 'f206100a-62d2-4e55-a15f-1f8b331fdada';
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
  currentPos: Point = new Point(644, 308);
  initialPos: Point = new Point(300, 250);
  drawnPath: fabric.Rect[] = [];

  //////////////////////////////////////////////
  //////////////////////////////////////////////

  // trilateration
  distances: number[] = [100, 100, 100, 100, 100, 100];
  drawnCurrentLocation: fabric.Image;
  headingAngle: number = 45;

  // ws
  userUuid: string = 'sampleasechangethis';
  subject: WebSocketSubject<any>;

  // navigation icon
  private navIcon: HTMLImageElement;
  private navIconSrc = 'assets/img/arrow.svg';

  //////////////////////////////////////////////
  //////////////////////////////////////////////

  uuid = '74278bda-b644-4520-8f0c-720eaf059935';
  beaconData = [];
  beaconUuid: String;
  scanStatus: boolean = false;
  private delegate: any = null;
  public beaconRegion: any = null;
  public iosDevice: boolean = false;
  options: WifiScanResultsOptions;

  // accelerometer
  acceleration: DeviceMotionEventAcceleration;
  lastAcc = [0.0, 0.0, 0.0];
  accXSum: number = 0;
  accYSum: number = 0;
  accZSum: number = 0;

  displacementX: number = 0;
  displacementY: number = 0;
  displacementZ: number = 0;

  accHistory: AccHistory;
  stepCount: number = 0;

  z = [
    {
      position: 0,
      velocity: 0,
      acceleration: 0,
      time: undefined,
    },
  ];

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage,
    //////////////////////////////////////////////
    private readonly ibeacon: IBeacon,
    private readonly platform: Platform,
    private changeRef: ChangeDetectorRef,
    private wifiWizard2: WifiWizard2,
    private magnetometer: Magnetometer,
    private deviceOrientation: DeviceOrientation,

    // trilateration
    private trilateration: TrilaterationService,
    // ws
    private socket: WebsocketService,

    // pathfinding
    private pathfinding: PathfindingService
  ) {
    this.platform.ready().then(() => {
      this.requestLocPermissoin();
      this.enableDebugLogs();
    });

    // this.startScanning();
    // interval(1000).subscribe((x) => {
    //   this.startWifiScan();
    // });
    //////////////////////////////////////////////
    this.handleSubmitClick(this.uuidMap);
    this.getDirection();
  }

  ngOnInit() {
    this.accHistory = new AccHistory();
    //SETUP BEACON LOCATIONS

    //SETUP BEACON LOCATIONS
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
    //////////////////////////////////////////////
    if (!this.platform.is('ios')) {
      this.iosDevice = true;
    }

    // ws
    this.subject = this.socket.connectSocket('update?id=' + this.userUuid);
    // download nav icon
    this.navIcon = new Image();
    this.navIcon.src = this.navIconSrc;

    window.addEventListener(
      'deviceorientationabsolute',
      (event) => {
        this.headingAngle = event.alpha;
        if (this.drawnCurrentLocation) {
          // console.log(this.headingAngle);
          this.drawnCurrentLocation.angle = this.headingAngle;
          // this.drawnCurrentLocation.setAngle(this.headingAngle);
          this.drawnCurrentLocation.setCoords();
          this.canvas.requestRenderAll();
        }
      },
      true
    );

    window.addEventListener(
      'devicemotion',
      (event) => {
        // console.log(event.acceleration.x, event.acceleration.y, event.acceleration.z);
        // console.log(event.interval);
        this.acceleration = event.acceleration;
        this.lastAcc[0] = this.lowPassFilter(
          this.lastAcc[0],
          this.acceleration.x
        );
        this.lastAcc[1] = this.lowPassFilter(
          this.lastAcc[1],
          this.acceleration.y
        );
        this.lastAcc[2] = this.lowPassFilter(
          this.lastAcc[2],
          this.acceleration.z
        );

        this.accHistory.addValue(this.lastAcc[2]);

        // this.accelerate(event.acceleration.z, event.timeStamp);
        const xTerm = Math.cos(this.toRadians(this.headingAngle));
        const yTerm = Math.sin(this.toRadians(this.headingAngle));

        const interval = event.interval / 1000;
        this.accXSum += this.lastAcc[2] * interval * xTerm;
        this.accYSum += this.lastAcc[2] * interval * yTerm;

        if (true) {
          // this.accZSum += this.lastAcc[2] * interval;

          this.displacementX += interval * this.accXSum * xTerm;
          this.displacementY += interval * this.accYSum * yTerm;
          // this.displacementZ += interval * this.accZSum;

          // this.actualDisplacementX +=
          // this.displacementZ * Math.cos(this.toRadians(this.headingAngle));
          // this.acutalDisplacementY +=
          // this.displacementZ * Math.sin(this.toRadians(this.headingAngle));

          // this.currentPos.x = this.initialPos.x + this.displacementX;
          // const xChange =
          // this.displacementZ * Math.cos(this.toRadians(this.headingAngle));
          // const yChange =
          //   this.displacementZ * Math.sin(this.toRadians(this.headingAngle));
          this.currentPos.x = this.initialPos.x + this.displacementY * 100;
          this.currentPos.y = this.initialPos.y + this.displacementX * 100;

          // step counter, didnt work
//           for (let t = 0; t < 5; ++t) {
//             if(this.accHistory.getBack(t) - this.accHistory.getBack(0) > 5) {
//               console.log("Step!");
//               this.stepCount++;
//             }
//           }

          // console.log(this.currentPos);

          // Process event.acceleration, event.accelerationIncludingGravity,
          // event.rotationRate and event.interval
          this.drawPosition();
        }
      },
      true
    );
  }

  resetInertialPos2() {
    this.resetInertialPos(this.initialPos);
  }

  resetInertialPos(pos: Point) {
    this.initialPos.x = pos.x;
    this.initialPos.y = pos.y;

    this.currentPos.x = pos.x;
    this.currentPos.y = pos.y;

    this.lastAcc = [0.0, 0.0, 0.0];

    this.accXSum = 0.0;
    this.accYSum = 0.0;
    this.accZSum = 0.0;

    this.displacementX = 0.0;
    this.displacementY = 0.0;
    this.displacementZ = 0.0;

    this.drawPosition();
  }

  drawPosition() {
    if (this.drawnCurrentLocation) {
      this.drawnCurrentLocation.left = this.currentPos.x;
      this.drawnCurrentLocation.top = this.currentPos.y;
      this.drawnCurrentLocation.setCoords();
      this.canvas.requestRenderAll();
      this.changeRef.detectChanges();
    }
  }

  private lowPassFilter(old_value: number, new_value: number) {
    // const a = 0.5;
    // if (new_value < 0.1) return 0;
    // return old_value + a * (new_value - old_value);
    return new_value;
  }

  private toRadians(angle: number) {
    return angle * (Math.PI / 180);
  }

  eulerStep(state0, state1) {
    var interval = (state1.time - state0.time) / 1000; // convert ms to s
    if (interval) {
      state1.position = state0.position + state0.velocity * interval;
      state1.velocity = state0.velocity + state0.acceleration * interval;
    }
    return Object.assign({}, state1);
  }

  accelerate(a: number, t: number) {
    var newZ = Object.assign({}, this.z[0]);

    newZ.acceleration = Math.abs(a) > 0.1 ? a : 0; // noise filter
    newZ.time = t;
    newZ = this.eulerStep(this.z[0], newZ);

    newZ.velocity *= 0.9; // friction
    newZ.velocity = Math.abs(newZ.velocity) < 0.01 ? 0 : newZ.velocity; // noise filter
    newZ.position *= 0.999; // tend back to zero

    this.z.unshift(newZ);
    this.displacementZ = this.z[0].position;

    this.currentPos.y = this.initialPos.y + this.z[0].position * 100;
    // console.log(this.currentPos);

    if (this.drawnCurrentLocation) {
      this.drawnCurrentLocation.left = this.currentPos.x;
      this.drawnCurrentLocation.top = this.currentPos.y;
      this.drawnCurrentLocation.setCoords();
      this.canvas.requestRenderAll();
    } else {
    }

    // this.getNearestExit();
  }

  async getDirection() {
    this.deviceOrientation.getCurrentHeading().then(
      (data: DeviceOrientationCompassHeading) => {
        console.log(data);
      },
      (error: any) => console.log(error)
    );
    // localhost:8100/employee/employee-tabs
    // Watch the device compass heading change
    var subscription = this.deviceOrientation
      .watchHeading()
      .subscribe((data: DeviceOrientationCompassHeading) => {
        this.headingAngle = data.magneticHeading;
        if (this.drawnCurrentLocation) {
          console.log(this.headingAngle);
          this.drawnCurrentLocation.angle = this.headingAngle;
          // this.drawnCurrentLocation.setAngle(this.headingAngle);
          this.drawnCurrentLocation.setCoords();
          this.canvas.requestRenderAll();
        }
        // this.headingAngle = data.magneticHeading;
        // this.drawnCurrentLocation.angle = this.headingAngle;
        // console.log(this.headingAngle);
        // this.drawnCurrentLocation.setAngle(this.headingAngle);
        // this.drawnCurrentLocation.setCoords();
        // this.canvas.requestRenderAll();
        console.log(data);
      });
  }

  async startWifiScan() {
    // const SSID = await this.wifiWizard2.getConnectedSSID();
    // console.log(SSID);
    // const BSSID = await this.wifiWizard2.getConnectedBSSID();
    // console.log(BSSID);
    const scan = await this.wifiWizard2.scan();
    console.log(scan);
    const x = await this.wifiWizard2.getScanResults(this.options);
    console.log(x);
  }

  requestLocPermissoin(): void {
    // Request permission to use location on iOS
    if (this.platform.is('ios')) {
      this.ibeacon.requestAlwaysAuthorization();
      console.log(`: request ios permisson`);
    }
  }

  enableDebugLogs(): void {
    this.ibeacon.enableDebugLogs();
    this.ibeacon.enableDebugNotifications();
  }

  public onScanClicked(): void {
    if (!this.scanStatus) {
      this.startScanning();
      this.scanStatus = true;
    } else {
      this.scanStatus = false;
      this.stopScannning();
    }
  }

  public stopScannning(): void {
    // stop ranging
    this.ibeacon
      .stopRangingBeaconsInRegion(this.beaconRegion)
      .then(async () => {
        console.log(`Stopped ranging beacon region:`, this.beaconRegion);
      })
      .catch((error: any) => {
        console.log(
          `Failed to stop ranging beacon region: `,
          this.beaconRegion
        );
      });
  }

  startScanning() {
    // create a new delegate and register it with the native layer
    this.delegate = this.ibeacon.Delegate();

    this.ibeacon.setDelegate(this.delegate);

    this.beaconUuid = this.uuid;

    console.log(
      '--===--- Bluetooth state: ',
      this.ibeacon.isBluetoothEnabled()
    );

    // Check bluetooth status Y.Q
    this.ibeacon.isBluetoothEnabled().then(
      (data) => console.log('-------=== Enabled', data),
      (error: any) => console.error('-------=== Disabled', error)
    );

    // Subscribe to some of the delegate's event handlers
    this.delegate.didRangeBeaconsInRegion().subscribe(
      async (pluginResult: IBeaconPluginResult) => {
        console.log('didRangeBeaconsInRegion: ', pluginResult);
        console.log('found beacons size: ' + pluginResult.beacons.length);
        if (pluginResult.beacons.length > 0) {
          this.beaconData = pluginResult.beacons;
          //WRITE CODE HERE
          // for (let i = 0; i <= this.beaconData.length; i++) {
          //   // this.data.push(this.beaconData[i].accuracy);
          //   const obj = {
          //     dist: this.beaconData[i].accuracy,
          //     // proximity: this.beaconData[i].proximity,
          //     // rssi: this.beaconData[i].rssi,
          //     // tx: this.beaconData[i].tx,
          //     beaconNo: this.beaconData[i].minor,
          //   };

          //   [1,1,2,2,3]
          //   // this.statData.push(obj);
          //   // console.log(this.beaconData[i].accuracy);
          //   // console.log(this.beaconData[i].accuracy);
          //   // console.log(this.statData);
          // }

          const beaconData2: any[] = JSON.parse(
            JSON.stringify(this.beaconData)
          );
          beaconData2.sort((a, b) => {
            return a.accuracy > b.accuracy
              ? -1
              : a.accuracy < b.accuracy
              ? 1
              : 0;
          });
          const beaconData3 = beaconData2.slice(0, 3);

          const distArray = [0, 0, 0];
          console.log(distArray);
          for (let i = 0; i < beaconData3.length; i++) {
            distArray[i] = beaconData3[i].accuracy * 100;

            // this.trilateration.beacons[i] =
            for (let beacon of this.mainBeaconData) {
              if (beacon.beaconNo == beaconData3[i].minor) {
                const x = beacon.x;
                const y = beacon.y;
                this.trilateration.beacons[i] = [x, y];
                break;
              }
            }
          }

          console.log(distArray);
          console.log('Calling Get Location');
          this.getLocation(distArray);
          //END HERE

          this.changeRef.detectChanges(); // Check for data change to update view Y.Q
        } else {
          console.log('no beacons nearby');
        }
      },
      (error: any) => console.error(`Failure during ranging: `, error)
    );

    this.delegate.didStartMonitoringForRegion().subscribe(
      (pluginResult: IBeaconPluginResult) =>
        console.log('didStartMonitoringForRegion: ', pluginResult),
      (error: any) =>
        console.error(`Failure during starting of monitoring: `, error)
    );

    console.log(`Creating BeaconRegion with UUID of: `, this.uuid);

    // uuid is required, identifier and range are optional.
    this.beaconRegion = this.ibeacon.BeaconRegion('EST3', this.uuid);

    this.ibeacon.startMonitoringForRegion(this.beaconRegion).then(
      () => console.log('Native layer recieved the request to monitoring'),
      (error: any) =>
        console.error('Native layer failed to begin monitoring: ', error)
    );

    this.ibeacon
      .startRangingBeaconsInRegion(this.beaconRegion)
      .then(() => {
        console.log(`Started ranging beacon region: `, this.beaconRegion);
      })
      .catch((error: any) => {
        console.error(
          `Failed to start ranging beacon region: `,
          this.beaconRegion
        );
      });
  }

  async handleSubmitClick(uuidMap: string) {
    let orig_img = await this.pathfinding.initialize(uuidMap);
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

    this.getNearestExit();

    this.drawnCurrentLocation = new fabric.Image(this.navIcon, {
      left: this.currentPos.x,
      top: this.currentPos.y,
      originX: 'center',
      originY: 'center',
      // height: 20,
      // width: 20,
      // fill: 'red',
      selectable: false,
      angle: this.headingAngle,
    });
    this.drawnCurrentLocation.scaleToHeight(20);
    this.drawnCurrentLocation.scaleToWidth(20);
    this.canvas.add(this.drawnCurrentLocation);

    this.resetInertialPos(this.initialPos);
  }

  private addMarkers() {
    this.pathfinding.mapDoc
      .get()
      .toPromise()
      .then(async (res) => {
        const mapData = res.data();
        console.log(mapData);

        for (let marker of mapData.markers) {
          if (marker.name == 'beacon') {
            this.beaconListData.push(marker);
          }
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
        console.log('Hello Data');
        console.log(this.beaconListData);
        this.mainBeaconData = await this.setupBeaconData(this.beaconListData);
        this.setupTrilateration();
      });
  }

  private async setupBeaconData(beaconListData: MarkerInfo[]) {
    const data = [];
    for (let i = 0; i < beaconListData.length; i++) {
      data.push({
        beaconNo: i + 1,
        x: beaconListData[i].left + beaconListData[i].width / 2,
        y: beaconListData[i].top + beaconListData[i].height / 2,
      });
    }
    console.log('New Data');
    console.log(data);
    return data;
  }

  private setupTrilateration() {
    let beaconArr: Array<Array<number>> = [];
    for (let i = 0; i < 3; i++) {
      beaconArr.push([this.mainBeaconData[i].x, this.mainBeaconData[i].y]);
    }
    console.log('INIT BEACON');
    console.log(beaconArr);
    console.log('INIT BEACON');
    this.trilateration.initializeBeacons(beaconArr);
  }

  private async getLocation(distArray) {
    const pos = this.trilateration.getLocation(distArray);
    console.log('Got trilatered position', pos);

    // draw dot/image
    this.currentPos.x = pos[0];
    this.currentPos.y = pos[1];
    if (this.drawnCurrentLocation) {
      this.drawnCurrentLocation.left = pos[0];
      this.drawnCurrentLocation.top = pos[1];
      this.drawnCurrentLocation.setCoords();
      this.canvas.requestRenderAll();
    } else {
      this.drawnCurrentLocation = new fabric.Image(this.navIcon, {
        left: pos[0],
        top: pos[1],
        // height: 20,
        // width: 20,
        // fill: 'red',
        selectable: false,
        angle: this.headingAngle,
      });
      this.drawnCurrentLocation.scaleToHeight(20);
      this.drawnCurrentLocation.scaleToWidth(20);
      this.canvas.add(this.drawnCurrentLocation);
    }

    // send to ws server
    this.socket.sendMessage(this.subject, {
      x: pos[0],
      y: pos[0],
      name: this.userUuid,
    });

    this.getNearestExit();
  }

  private async getNearestExit() {
    const curpos = { x: this.currentPos.x, y: this.currentPos.y };

    // console.log(
    //   'cur pos',
    //   curposActual,
    //   this.imgMatrix[curposActual.x][curposActual.y]
    // );

    // easystarjs
    const minPath = (await this.pathfinding.getPath(
      curpos,
      this.pathfinding.exits
    )) as Point[];

    const path = minPath;
    if (path == null) {
      console.log('no path aaaaaaaaaa');
    } else {
      console.log('path found', path);
      while (this.drawnPath.length != 0) {
        let rect = this.drawnPath.pop();
        this.canvas.remove(rect);
      }

      for (let point of path) {
        // console.log(point, this.imgMatrix[point.y][point.x]);
        var rect = new fabric.Rect({
          left: point.x,
          top: point.y,
          fill: 'red',
          width: 5,
          height: 5,
          angle: 45,
          selectable: false,
        });
        this.canvas.add(rect);
        this.drawnPath.push(rect);
      }
    }
  }
}
