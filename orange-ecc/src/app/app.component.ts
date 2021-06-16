import { Component } from '@angular/core';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

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
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM,
    private router: Router,
    private storage: Storage
  ) {
    this.initializeApp();
    if (!this.platform.is('desktop')) {
      this.appPages = [
        { title: 'ERT', url: '/ert', icon: 'people' },
        { title: 'Employee', url: '/employee', icon: 'body' },
        {
          title: 'Employee Tabs',
          url: '/employee/employee-tabs',
          icon: 'body',
        },
        { title: 'ERT Tabs', url: '/ert/ert-tabs', icon: 'body' },
      ];
    }
  }

  async initializeApp() {
    await this.storage.create();
    if (this.platform.is('desktop')) {
      this.router.navigateByUrl('/cc/cc/cc-tabs/overview');
      console.log('Desktop');
    }
    this.storage.get('first_time').then((val) => {
      if (val !== null) {
        if (!this.platform.is('desktop')) {
          this.router.navigateByUrl('/employee/login');
          console.log("app isn't for the first time started");
        }
      } else {
        console.log('probably the first time');
        this.storage.set('first_time', 'done');
      }
    });

    if (!this.platform.is('desktop')) {
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
}
