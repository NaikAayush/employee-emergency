import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { interval } from 'rxjs';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-command-center-emergency',
  templateUrl: './command-center-emergency.page.html',
  styleUrls: ['./command-center-emergency.page.scss'],
})
export class CommandCenterEmergencyPage implements OnInit {
  timer = 0;
  hours;
  minutes;
  seconds;
  valid = false;
  charlie;
  charlieA;
  constructor(private http: HttpClient, private afs: AngularFirestore) {}

  async ngOnInit() {
    interval(1000).subscribe(async (x) => {
      const time: any = new Date().getTime() / 1000;
      const start: any = await this.fireGet();
      console.log(time);
      console.log(start.timer.seconds);
      const diff = time - start.timer.seconds;
      this.timer = Math.round(diff);
      this.hours = Math.floor(this.timer / 3600);
      this.timer %= 3600;
      this.minutes = Math.floor(this.timer / 60);
      this.seconds = this.timer % 60;
      this.charlie = await this.fireGetERTCharlie();
      this.charlieA = this.charlie.availability;
      console.log(this.charlie);
      console.log(this.charlieA);
    });
    // const x: any = await this.fireGet();
    // console.log(x.timer.seconds);
  }
  async startEmergency() {
    this.valid = true;
    console.log('EM');
    await this.http
      .post(
        'https://fcm.googleapis.com/fcm/send',
        {
          to: environment.FCMToken,
          notification: {
            body: 'Attention ERT, Mark your availability!',
            title: 'Emergency Activated!',
            click_action: 'FCM_PLUGIN_ACTIVITY',
          },
          data: {
            type: 'ert',
          },
        },
        {
          headers: {
            Authorization: environment.AuthToken,
            'Content-Type': 'application/json',
          },
        }
      )
      .toPromise();
    await this.http
      .post(
        'https://fcm.googleapis.com/fcm/send',
        {
          to: environment.FCMToken,
          notification: {
            body: 'Please use the app to vacate the office area quickly',
            title: 'Emergency Activated!',
            click_action: 'FCM_PLUGIN_ACTIVITY',
          },
          data: {
            type: 'employee',
          },
        },
        {
          headers: {
            Authorization: environment.AuthToken,
            'Content-Type': 'application/json',
          },
        }
      )
      .toPromise();
    this.fireCreate({ timer: new Date() });
  }

  fireCreate(data) {
    return new Promise<any>((resolve, reject) => {
      this.afs
        .collection('timer')
        .doc('timer')
        .set(data)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }

  async fireGetERTCharlie() {
    return await (
      await this.afs.collection('ert').doc('charlie').get().toPromise()
    ).data();
  }

  async fireGet() {
    return await (
      await this.afs.collection('timer').doc('timer').get().toPromise()
    ).data();
  }
  async stopEmergency() {
    this.valid = false;
    this.timer = 0;
    return new Promise<any>((resolve, reject) => {
      this.afs
        .collection('timer')
        .doc('timer')
        .set({})
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }
}
