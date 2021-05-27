import { Component } from '@angular/core';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Command Center', url: '/cc', icon: 'business' },
    { title: 'Simulation', url: '/cc-sim', icon: 'pulse' },
    { title: 'ERT', url: '/ert', icon: 'people' },
    { title: 'Employee', url: '/employee', icon: 'body' },
    { title: 'Employee Tabs', url: '/employee/employee-tabs', icon: 'body' },
    { title: 'ERT Tabs', url: '/ert/ert-tabs', icon: 'body' },
    // { title: 'Test Beacon', url: '/test/beacon', icon: 'body' },
    // { title: 'Test WiFi', url: '/test/wifi', icon: 'body' },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // subscribe to a topic
      // this.fcm.subscribeToTopic('Deals');

      // get FCM token
      this.fcm.getToken().then((token) => {
        console.log(token);
      });

      // ionic push notification example
      this.fcm.onNotification().subscribe((data) => {
        console.log(data);
        if (data.wasTapped) {
          if (data.type == 'ert') {
            this.router.navigateByUrl('/ert/ert-tabs/ert/ert-tabs/status');
          } else {
            this.router.navigateByUrl(
              '/employee/employee-tabs/employee/employee-tabs/map'
            );
          }

          console.log('Received in background');
        } else {
          console.log('Received in foreground');
        }
      });

      // refresh the FCM token
      this.fcm.onTokenRefresh().subscribe((token) => {
        console.log(token);
      });

      // unsubscribe from a topic
      // this.fcm.unsubscribeFromTopic('offers');
    });
  }
}
