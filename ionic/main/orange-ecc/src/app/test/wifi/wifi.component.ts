import { Component, OnInit } from '@angular/core';
import {
  WifiScanResultsOptions,
  WifiWizard2,
} from '@ionic-native/wifi-wizard-2/ngx';
import { interval } from 'rxjs';
@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html',
  styleUrls: ['./wifi.component.scss'],
})
export class WifiComponent implements OnInit {
  options: WifiScanResultsOptions;
  constructor(private wifiWizard2: WifiWizard2) {
    interval(1000).subscribe((x) => {
      this.startWifiScan();
    });
  }

  ngOnInit() {}
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
}
