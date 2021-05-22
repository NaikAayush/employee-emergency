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
import * as EasyStar from 'easystarjs';
import * as util from 'util';

import { Point } from './models/point';
import { MarkerInfo } from './models/marker-info';
import { MapInfo } from './models/map-info';
import { ChoiceInfo } from './models/choice-info';
import { TrilaterationService } from 'src/app/employee/services/trilateration/trilateration.service';
import { WebsocketService } from 'src/app/employee/services/websocket/websocket.service';
import { WebSocketSubject } from 'rxjs/webSocket';

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
  uuidMap: string = 'a246ddf4-3ded-49b9-bacf-fbf7b700e49e';

  private mapDoc: AngularFirestoreDocument<MapInfo>;
  private canvas: fabric.Canvas;

  // image matrix for path finding
  private imgMatrix: Array<Array<number>>;
  // array of exits for pathfinding
  private exits: Point[];
  // A star finder
  // private pathfinder: AStarFinder;
  // private astar: Astar;
  private easystar: EasyStar.js;
  private findPathAsync: Function;

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
  origImg: HTMLImageElement;

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
    private socket: WebsocketService
  ) {
    this.platform.ready().then(() => {
      this.requestLocPermissoin();
      this.enableDebugLogs();
    });

    this.startScanning();
    // interval(1000).subscribe((x) => {
    //   this.startWifiScan();
    // });
    //////////////////////////////////////////////
    this.mapDoc = firestore.doc<MapInfo>('map/unknown');

    this.easystar = new EasyStar.js();
    this.handleSubmitClick(this.uuidMap);
    // this.getDirection();
  }

  ngOnInit() {
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
  }

  async getDirection() {
    this.deviceOrientation.getCurrentHeading().then(
      (data: DeviceOrientationCompassHeading) => console.log(data),
      (error: any) => console.log(error)
    );

    // Watch the device compass heading change
    var subscription = this.deviceOrientation
      .watchHeading()
      .subscribe((data: DeviceOrientationCompassHeading) => console.log(data));
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

          const distArray = [0, 0, 0, 0, 0, 0];
          console.log(distArray);
          for (let i = 0; i < this.beaconData.length; i++) {
            distArray[this.beaconData[i].minor - 1] =
              this.beaconData[i].accuracy * 100;
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

  handleSubmitClick(uuidMap: string) {
    this.uuidMap = uuidMap;
    this.mapDoc = this.firestore.doc<MapInfo>('map/' + uuidMap);
    console.log('hiii', uuidMap);

    const imgRef = this.storage.ref('map/' + this.uuidMap + '/orig');
    imgRef
      .getDownloadURL()
      .toPromise()
      .then((res) => {
        console.log(res);

        let orig_img = new Image();
        this.origImg = orig_img;
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

          this.getMapGrid();
        };
      })
      .catch((err) => {
        console.log('error go brr', err);
      });
  }

  private getMapGrid() {
    this.mapDoc
      .get() // TODO: maybe set cache here for spid
      .toPromise()
      .then((res) => {
        const data = res.data();
        const imgString = data.array;
        const imgArray = JSON.parse(imgString);
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
      });
  }

  private addMarkers() {
    this.mapDoc
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
    for (let i = 0; i < this.mainBeaconData.length; i++) {
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
    if (this.drawnCurrentLocation) {
      this.drawnCurrentLocation.left = pos[0];
      this.drawnCurrentLocation.top = pos[1];
      this.drawnCurrentLocation.setCoords();
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
  }

  private async getNearestExit() {
    const curpos = { x: this.currentPos.x, y: this.currentPos.y };

    const scale = this.origImg.height / this.imgMatrix.length;
    const curposActual = {
      x: Math.round(curpos.x / scale),
      y: Math.round(curpos.y / scale),
    };

    // console.log(
    //   'cur pos',
    //   curposActual,
    //   this.imgMatrix[curposActual.x][curposActual.y]
    // );

    // easystarjs
    const promises = [];
    for (let exit of this.exits) {
      const exitPoint = { x: exit.y, y: exit.x };
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

    let minPath = null;
    let minPathLength = Number.MAX_SAFE_INTEGER;
    for (let path of paths) {
      if (path !== null && path.length < minPathLength) {
        minPath = path;
        minPathLength = path.length;
      }
    }

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
          left: point.x * scale - 5,
          top: point.y * scale - 5,
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
