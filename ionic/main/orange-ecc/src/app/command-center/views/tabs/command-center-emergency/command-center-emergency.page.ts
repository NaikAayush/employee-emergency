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
  valid = false;
  constructor(private http: HttpClient, private afs: AngularFirestore) {}

  async ngOnInit() {
    interval(1000).subscribe(async (x) => {
      const time: any = new Date().getTime() / 1000;
      const start: any = await this.fireGet();
      console.log(time);
      console.log(start.timer.seconds);
      const diff = time - start.timer.seconds;
      this.timer = Math.round(diff);
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
            body: 'Body of Your Notification',
            title: 'Title of Your Notification',
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

  async fireGet() {
    return await (
      await this.afs.collection('timer').doc('timer').get().toPromise()
    ).data();
  }
  async stopEmergency() {
    this.valid = false;
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
