import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-employee-sos',
  templateUrl: './employee-sos.page.html',
  styleUrls: ['./employee-sos.page.scss'],
})
export class EmployeeSosPage implements OnInit {
  constructor(public toastController: ToastController) {}

  ngOnInit() {}

  async sos() {
    await this.presentToast('ERT has been alerted! Please stay calm');
  }
  async safe() {
    await this.presentToast('You have been marked as safe');
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 5000,
    });
    toast.present();
  }
}
