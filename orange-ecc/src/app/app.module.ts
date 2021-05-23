import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { IBeacon } from '@ionic-native/ibeacon/ngx';
import { WifiWizard2 } from '@ionic-native/wifi-wizard-2/ngx';
import { Magnetometer } from '@ionic-native/magnetometer/ngx';
import { DeviceOrientation } from '@ionic-native/device-orientation/ngx';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';

import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    IBeacon,
    WifiWizard2,
    Magnetometer,
    DeviceOrientation,
    FCM,
    SplashScreen,
    StatusBar,
    CameraPreview,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
