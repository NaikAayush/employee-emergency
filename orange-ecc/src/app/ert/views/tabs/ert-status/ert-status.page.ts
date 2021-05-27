import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ert-status',
  templateUrl: './ert-status.page.html',
  styleUrls: ['./ert-status.page.scss'],
})
export class ErtStatusPage implements OnInit {
  constructor(public toastController: ToastController) {}

  ngOnInit() {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your response has been marked.',
      duration: 2000,
    });
    toast.present();
  }
}
