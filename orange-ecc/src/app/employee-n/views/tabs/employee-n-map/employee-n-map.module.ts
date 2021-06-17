import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeNMapPageRoutingModule } from './employee-n-map-routing.module';

import { EmployeeNMapPage } from './employee-n-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeNMapPageRoutingModule
  ],
  declarations: [EmployeeNMapPage]
})
export class EmployeeNMapPageModule {}
