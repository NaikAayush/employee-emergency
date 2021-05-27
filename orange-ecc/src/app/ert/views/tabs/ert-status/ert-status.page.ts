import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ert-status',
  templateUrl: './ert-status.page.html',
  styleUrls: ['./ert-status.page.scss'],
})
export class ErtStatusPage implements OnInit {
  constructor(
    public toastController: ToastController,
    private afs: AngularFirestore
  ) {}

  ngOnInit() {}

  async onAccept() {
    this.fireCreate({ availability: true });
    this.presentToast(
      'Your response has been marked as accepted, please move to the area now.'
    );
  }

  async onReject() {
    this.fireCreate({ availability: false });
    this.presentToast('Your response has been marked as rejected.');
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

  fireCreate(data) {
    return new Promise<any>((resolve, reject) => {
      this.afs
        .collection('ert')
        .doc('charlie')
        .set(data)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }
}
