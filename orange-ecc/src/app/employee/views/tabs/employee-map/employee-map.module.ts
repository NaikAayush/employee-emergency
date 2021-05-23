import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeMapPageRoutingModule } from './employee-map-routing.module';

import { EmployeeMapPage } from './employee-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeMapPageRoutingModule
  ],
  declarations: [EmployeeMapPage]
})
export class EmployeeMapPageModule {}
