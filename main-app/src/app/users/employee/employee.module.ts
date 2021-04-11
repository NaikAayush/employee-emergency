import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IBeacon } from '@ionic-native/ibeacon/ngx';

import { RouteReuseStrategy } from '@angular/router';

import { EmployeePageRoutingModule } from './employee-routing.module';
import { EmployeePage } from './employee.page';

import { LoginComponent } from './login/login.component';

import { firebase, firebaseui, FirebaseUIModule } from 'firebaseui-angular';
import { environment } from '../../../environments/environment';
import { AngularFireModule } from '@angular/fire';
import {
  AngularFireAuthModule,
  USE_EMULATOR as USE_AUTH_EMULATOR,
} from '@angular/fire/auth';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    },
  ],
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeePageRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    IBeacon,
  ],
  declarations: [EmployeePage, LoginComponent],
})
export class EmployeePageModule {}
