import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { WifiWizard2 } from '@ionic-native/wifi-wizard-2/ngx';
import { IBeacon } from '@ionic-native/ibeacon/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    WifiWizard2,
    IBeacon,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
