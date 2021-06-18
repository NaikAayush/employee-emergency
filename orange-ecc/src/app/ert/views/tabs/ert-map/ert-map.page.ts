import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { IBeacon, IBeaconPluginResult } from '@ionic-native/ibeacon/ngx';
import { Platform } from '@ionic/angular';
import {
  WifiScanResultsOptions,
  WifiWizard2,
} from '@ionic-native/wifi-wizard-2/ngx';
import { Magnetometer } from '@ionic-native/magnetometer/ngx';
import {
  DeviceOrientation,
  DeviceOrientationCompassHeading,
} from '@ionic-native/device-orientation/ngx';

import { fabric } from 'fabric';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

import { TrilaterationService } from 'src/app/employee/services/trilateration/trilateration.service';
import { PathfindingService } from 'src/app/employee/services/pathfinding/pathfinding.service';
import { MarkerInfo } from 'src/app/employee/views/tabs/employee-map/models/marker-info';
import { ChoiceInfo } from 'src/app/employee/views/tabs/employee-map/models/choice-info';
import { Point } from 'src/app/employee/views/tabs/employee-map/models/point';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ert-map',
  templateUrl: './ert-map.page.html',
  styleUrls: ['./ert-map.page.scss'],
})
export class ErtMapPage implements OnInit {
  data;
  beaconListData: MarkerInfo[] = [];
  mainBeaconData = [];
  //////////////////////////////////////////////
  //////////////////////////////////////////////
  //////////////////////////////////////////////
  //////////////////////////////////////////////
  // uuidMap of the map to download
  uuidMap: string = 'a246ddf4-3ded-49b9-bacf-fbf7b700e49e';
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
  currentPos: Point = new Point(517, 115);
  drawnPath: fabric.Rect[] = [];

  //////////////////////////////////////////////
  //////////////////////////////////////////////

  // trilateration
  distances: number[] = [100, 100, 100, 100, 100, 100];
  drawnCurrentLocation: fabric.Image;
  headingAngle: number = 45;

  // ws
  userUuid: string = 'LxhvXHuCJxUXITPfzmYAnKJb6uf2';
  // subject: WebSocketSubject<any>;
  // subject: WebSocketSubject<any>;
  wsLoc: WebSocket;

  userIds: string[] = [
    'IWF3Z5idpBRA9cbdH9R9IWFN0852',
  ];

  // navigation icon
  private navIcon: HTMLImageElement;
  private navIconSrc = 'assets/img/arrow.svg';

  // ERT Stuff
  private userMarkers: Record<string, fabric.Group> = {};
  private employeeLocs: Point[] = [{ x: 590.44, y: 386.66 }];

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
    //////////////////////////////////////////////
    private readonly ibeacon: IBeacon,
    private readonly platform: Platform,
    private changeRef: ChangeDetectorRef,
    private wifiWizard2: WifiWizard2,
    private deviceOrientation: DeviceOrientation,

    // trilateration
    private trilateration: TrilaterationService,
    // ws
    // private socket: WebsocketService,

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
    // this.subject = this.socket.connectSocket('update?id=' + this.userUuid);
    this.wsLoc = new WebSocket(
      environment.wsEndpoint + 'update?id=' + this.userUuid
    );
    // download nav icon
    this.navIcon = new Image();
    this.navIcon.src = this.navIconSrc;
  }

  async setupEmployees() {
    const data = {
      x: this.employeeLocs[0].x - 18,
      y: this.employeeLocs[0].y - 8,
      name: 'EMP 1',
    };
    let color = 'blue';

    let reect = new fabric.Rect({
      height: 10,
      width: 10,
      fill: color,
      originX: 'center',
      originY: 'center',
    });
    let text = new fabric.Text(data.name, {
      fontSize: 10,
      top: 10,
      originX: 'center',
      originY: 'center',
    });

    this.userMarkers['emp1'] = new fabric.Group([reect, text], {
      left: data.x,
      top: data.y,
      selectable: false,
    });

    this.canvas.add(this.userMarkers['emp1']);
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
          console.log('Message from server ', data);

          this.employeeLocs[0].x = data.x;
          this.employeeLocs[0].y = data.y;

          if (this.userMarkers[uid]) {
            console.log('found');
            // this.userMarkers[uid].set({
            //   // left: data.x,
            //   top: data.y,
            // });

            fabric.util.animate({
              startValue: this.userMarkers[uid].left,
              endValue: data.x,
              onChange: (val) => {
                this.userMarkers[uid].left = val;
                this.userMarkers[uid].setCoords();
                this.canvas.renderAll();
              },
            });

            fabric.util.animate({
              startValue: this.userMarkers[uid].top,
              endValue: data.y,
              onChange: (val) => {
                this.userMarkers[uid].top = val;
                this.userMarkers[uid].setCoords();
                this.canvas.renderAll();
              },
            });

            // this.userMarkers[uid].setCoords();
            // this.canvas.renderAll();
          } else {
            let color = 'red';

            if (data.ert) {
              color = 'blue';
            }

            let reect = new fabric.Rect({
              height: 10,
              width: 10,
              fill: color,
              originX: 'center',
              originY: 'center',
            });
            let text = new fabric.Text(data.name, {
              fontSize: 10,
              top: 10,
              originX: 'center',
              originY: 'center',
            });

            this.userMarkers[uid] = new fabric.Group([reect, text], {
              left: data.x,
              top: data.y,
              selectable: false,
            });

            this.canvas.add(this.userMarkers[uid]);

          }

          this.getNearestExit();
        } catch (error) {
          console.log('Bad data from WS', error);
        }
      });
    });
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

    // await this.setupEmployees();

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
    // this.socket.sendMessage(this.subject, {
    //   x: pos[0],
    //   y: pos[0],
    //   name: this.userUuid,
    // });
    this.wsLoc.send(
      JSON.stringify({
        x: pos[0],
        y: pos[1],
        name: "Samyak ERT",
      })
    );

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
      this.employeeLocs,
      false,
      true
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
          originX: "center",
          originY:" center",
          angle: 45,
          selectable: false,
        });
        this.canvas.add(rect);
        this.drawnPath.push(rect);
      }
    }
  }
}
