import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IBeacon } from '@ionic-native/ibeacon/ngx';

import { IbeaconPageRoutingModule } from './ibeacon-routing.module';

import { IbeaconPage } from './ibeacon.page';
import { RouteReuseStrategy } from '@angular/router';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, IbeaconPageRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    IBeacon,
  ],
  declarations: [IbeaconPage],
})
export class IbeaconPageModule {}
