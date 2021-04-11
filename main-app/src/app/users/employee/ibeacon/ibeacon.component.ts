import {
  Component,
  ChangeDetectorRef,
  OnInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { IBeacon, IBeaconPluginResult } from '@ionic-native/ibeacon/ngx';
import { Platform } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { webSocket } from 'rxjs/webSocket';
import { Subject } from 'rxjs';

declare var require: any;
const trilat = require('trilat');

// subject.next({ x: 400, y: 100 });

function initializeBeacons(coords: Array<Array<number>>): Array<Array<number>> {
  let newInput = [];

  coords.forEach((coord) => {
    newInput.push([coord[0], coord[1], 0]);
  });

  return newInput;
}

function getLocation(
  beacons: Array<Array<number>>,
  distances: Array<number>
): Array<number> {
  if (beacons.length != distances.length) {
    throw Error('Distances given do not match array length');
  }

  for (let i: number = 0; i < beacons.length; ++i) {
    beacons[i][2] = distances[i];
  }

  var pos1 = trilat(beacons);

  return pos1;
}

@Component({
  selector: 'app-ibeacon',
  templateUrl: './ibeacon.component.html',
  styleUrls: ['./ibeacon.component.scss'],
})
export class IbeaconComponent implements OnInit {
  subject;
  name;
  statData = [];
  uuid = '74278bda-b644-4520-8f0c-720eaf059935';
  beaconData = [];
  beaconUuid: String;
  scanStatus: boolean = false;
  private delegate: any = null;
  public beaconRegion: any = null;
  public iosDevice: boolean = false;
  data = [];
  beacon1 = 100;
  beacon2 = 100;
  beacon3 = 100;

  @ViewChild('canvas') canvasEl: ElementRef;

  /**
   * Reference Canvas object
   */
  private _CANVAS: any;

  /**
   * Reference the context for the Canvas element
   */
  private _CONTEXT: any;

  private img: HTMLImageElement;

  private width = 704;
  private height = 366;

  private beacons: Array<Array<number>> = initializeBeacons([
    [220, 366],
    [60, 366],
    [220, 206],
  ]);

  constructor(
    private readonly ibeacon: IBeacon,
    private readonly platform: Platform,
    private changeRef: ChangeDetectorRef,
    private socket: WebsocketService,
    public auth: AuthService
  ) {
    this.platform.ready().then(() => {
      this.requestLocPermissoin();
      this.enableDebugLogs();
    });
    this.init();
  }

  async init() {
    const user = await this.auth.getUser();
    // console.log(user.uid);
    // console.log(user.email);
    this.name = user.email.split('@')[0];
    this.subject = this.socket.connectSocket('update?id=' + user.uid);
    this.subject.subscribe();
    // console.log('Send Message');
    // this.socket.sendMessage(subject, { x: 900, y: 900, name: name });
  }

  /**
   * Implement functionality as soon as the template view has loaded
   *
   * @public
   * @method ionViewDidLoad
   * @return {none}
   */
  ionViewDidEnter(): void {
    this._CANVAS = this.canvasEl.nativeElement;
    this._CANVAS.width = this.width;
    this._CANVAS.height = this.height;

    this.initialiseCanvas();
    this.drawCircle();
  }

  /**
   * Detect if HTML5 Canvas is supported and, if so, configure the
   * canvas element accordingly
   *
   * @public
   * @method initialiseCanvas
   * @return {none}
   */
  initialiseCanvas(): void {
    if (this._CANVAS.getContext) {
      this.setupCanvas();
      this.img = new Image();
      this.img.addEventListener('load', () => {
        this._CONTEXT.drawImage(this.img, 0, 0);
      });
      this.img.src = 'assets/flooplan-new.png';
    }
  }

  /**
   * Create a circle using canvas drawing API
   *
   * @public
   * @method drawCircle
   * @return {none}
   */
  drawCircle(): void {
    this.clearCanvas();

    const ctx = this._CONTEXT;
    ctx.drawImage(this.img, 0, 0);
    ctx.save();

    ctx.beginPath();
    this.drawDot();
    ctx.fill();
    this.beacons.forEach((item, idx) => {
      this.drawDot2(
        item[0],
        this.height - item[1],
        `beacon${idx}`,
        'black',
        10,
        15
      );
    });
  }

  drawDot2(
    x: number,
    y: number,
    text: string,
    color: string = 'red',
    offsetX: number = 10,
    offsetY: number = 0
  ): void {
    const ctx = this._CONTEXT;

    ctx.beginPath();

    ctx.font = 'bold 20px arial';
    ctx.fillStyle = color;

    // const pos = getLocation(this.beacons, [this.beacon1, this.beacon2, this.beacon3])
    // console.log(pos)

    ctx.arc(x, y, 10, 0, Math.PI * 2, true);
    ctx.fillText(text, x + offsetX, y + offsetY);

    ctx.fill();
  }

  drawDot(): void {
    const ctx = this._CONTEXT;
    ctx.restore();

    ctx.font = 'bold 20px serif';
    ctx.fillStyle = 'red';

    var pos = getLocation(this.beacons, [
      this.beacon1,
      this.beacon2,
      this.beacon3,
    ]);
    // var pos = getLocation(this.beacons, [a, b, c]);

    // console.log('AAAAAAAAAA');
    // console.log(pos);
    // console.log('AAAAAAAAAA');

    const x = pos[0];
    const y = this.height - pos[1];
    // console.log('Z');
    // console.log({ x: x, y: y, name: this.name });
    // console.log('Z');
    this.socket.sendMessage(this.subject, { x: x, y: y, name: this.name });

    ctx.arc(x, y, 10, 0, Math.PI * 2, true);
    ctx.fillText('You are here', x + 10, y);
    pos;
  }

  /**
   * Configure the Canvas element
   *
   * @public
   * @method setupCanvas
   * @return {none}
   */
  setupCanvas(): void {
    this._CONTEXT = this._CANVAS.getContext('2d');
    this._CONTEXT.fillStyle = '#3e3e3e';
    this._CONTEXT.fillRect(0, 0, 500, 500);
  }

  /**
   * Reset the Canvas element/clear previous content
   *
   * @public
   * @method clearCanvas
   * @return {none}
   */
  clearCanvas(): void {
    this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
    this.setupCanvas();
  }

  ngOnInit() {
    if (!this.platform.is('ios')) {
      this.iosDevice = true;
    }
    this.onScanClicked();
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
          for (let i = 0; i < 3; i++) {
            this.data.push(this.beaconData[i].accuracy);
            const obj = {
              dist: this.beaconData[i].accuracy,
              proximity: this.beaconData[i].proximity,
              rssi: this.beaconData[i].rssi,
              tx: this.beaconData[i].tx,
              beaconNo: this.beaconData[i].minor,
            };
            this.statData.push(obj);
            // console.log(this.beaconData[i].accuracy);
            // console.log(this.beaconData[i].accuracy);
            console.log(this.statData);
          }
          this.beacon1 = this.data[0] * 100;
          this.beacon2 = this.data[1] * 100;
          this.beacon3 = this.data[2] * 100;
          // console.log(this.data);
          // this.initialiseCanvas();
          this.drawCircle();
          this.data = [];

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
}
