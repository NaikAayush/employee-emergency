import { Component, ChangeDetectorRef } from '@angular/core';
import { IBeacon, IBeaconPluginResult } from '@ionic-native/ibeacon/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  uuid = '74278bda-b644-4520-8f0c-720eaf059935';
  // uuid = '06f5959f-d546-7399-9f41-43001325cc5b';
  beaconData = [];
  pluginDataNew;
  pluginDataNew1;
  brr;
  beaconUuid: String;
  scanStatus: boolean = false;
  private delegate: any = null;
  public beaconRegion: any = null;
  public iosDevice: boolean = false;

  constructor(
    private readonly ibeacon: IBeacon,
    private readonly platform: Platform,
    private changeRef: ChangeDetectorRef
  ) {
    this.platform.ready().then(() => {
      this.requestLocPermissoin();
      this.enableDebugLogs();
    });
    this.startScanning();
  }

  ngOnInit() {
    if (!this.platform.is('ios')) {
      this.iosDevice = true;
    }
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

    // {uuid: "74278bda-b644-4520-8f0c-720eaf059935", major: "11", minor: "2", proximity: "ProximityNear", rssi: -67, …}
    // {uuid: "74278bda-b644-4520-8f0c-720eaf059935", major: "11", minor: "3", proximity: "ProximityImmediate", rssi: -50, …}

    this.delegate.didRangeBeaconsInRegion().subscribe(
      async (pluginResult: IBeaconPluginResult) => {
        const data1: any = pluginResult.beacons;
        console.log(data1);
        var temp = [];
        console.log(temp);
        for (var i = 1; i <= 3; i++) {
          for (var j = 0; j < data1.length; j++) {
            if (data1[j].minor == i) {
              if (temp[i - 1]) {
                temp[i - 1] = (temp[i - 1] + data1[j].accuracy) / 2;
              } else {
                temp[i - 1] = data1[j].accuracy;
              }
            }
          }
        }
        this.brr = temp;
        console.log(this.brr);
        console.log(temp);
        // var data = pluginResult.beacons;
        // for (let i = 1; i <= 3; i++) {
        //   for (let j = 0; j < data.length; j++) {
        //     if (data[j].minor == i) {
        //       this.pluginDataNew1[i] =
        //         (this.pluginDataNew1[i] + data[j].minor) / 2;
        //         console.log(this.pluginDataNew1)
        //     }
        //   }
        // }

        this.pluginDataNew = pluginResult;
        console.log('didRangeBeaconsInRegion: ', pluginResult);
        console.log('found beacons size: ' + pluginResult.beacons.length);
        if (pluginResult.beacons.length > 0) {
          this.beaconData = pluginResult.beacons;
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
