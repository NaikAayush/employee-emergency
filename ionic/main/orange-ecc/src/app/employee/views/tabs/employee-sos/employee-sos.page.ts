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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'ERT has been alerted! Please stay calm',
      duration: 5000,
    });
    toast.present();
  }
}
