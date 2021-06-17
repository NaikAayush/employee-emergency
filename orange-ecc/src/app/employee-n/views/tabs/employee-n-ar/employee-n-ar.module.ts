import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeNArPageRoutingModule } from './employee-n-ar-routing.module';

import { EmployeeNArPage } from './employee-n-ar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeNArPageRoutingModule
  ],
  declarations: [EmployeeNArPage]
})
export class EmployeeNArPageModule {}
