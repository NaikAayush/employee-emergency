import { Component } from '@angular/core';
import {
  WifiScanResultsOptions,
  WifiWizard2,
} from '@ionic-native/wifi-wizard-2/ngx';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  scanResult;
  ap1;
  ap1Dist;
  txVal: any = 0;
  options: WifiScanResultsOptions;
  constructor(private wifiWizard2: WifiWizard2) {
    interval(10).subscribe((x) => {
      this.scan();
    });
  }
  //   {
  //     "level": -61,
  //     "SSID": "Aayush Deco",
  //     "BSSID": "68:ff:7b:f4:98:73",
  //     "frequency": 5180,
  //     "capabilities": "[WPA-PSK-CCMP+TKIP][WPA2-PSK+FT/PSK-CCMP+TKIP][RSN-PSK+FT/PSK-CCMP+TKIP][ESS][WPS]",
  //     "timestamp": 515749115488,
  //     "channelWidth": 2,
  //     "centerFreq0": 5210,
  //     "centerFreq1": 0
  // }
  async scan() {
    const scan = await this.wifiWizard2.scan();
    // console.log(scan);
    const x = await this.wifiWizard2.getScanResults(this.options);
    // console.log(x);
    for (let i = 0; i < x.length; i++) {
      if (x[i].SSID == 'AP-1') {
        // console.log(x[i].level);
        this.ap1 = x[i].level;
        this.ap1Dist = this.rssiDist(this.txVal, this.ap1, 2);
      }
    }
  }

  rssiDist(mp, rssi, N) {
    const distance = Math.pow(10, (mp - rssi) / (10 * N));
    return distance;
  }

  changeTx(tx) {
    this.txVal = tx;
  }
}
