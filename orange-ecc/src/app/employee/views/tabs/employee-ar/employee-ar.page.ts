import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-employee-ar',
  templateUrl: './employee-ar.page.html',
  styleUrls: ['./employee-ar.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EmployeeArPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss();
  }
}
