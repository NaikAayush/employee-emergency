import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeArPageRoutingModule } from './employee-ar-routing.module';

import { EmployeeArPage } from './employee-ar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeArPageRoutingModule
  ],
  declarations: [EmployeeArPage]
})
export class EmployeeArPageModule {}
