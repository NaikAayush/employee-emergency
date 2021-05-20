import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeSosPageRoutingModule } from './employee-sos-routing.module';

import { EmployeeSosPage } from './employee-sos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeSosPageRoutingModule
  ],
  declarations: [EmployeeSosPage]
})
export class EmployeeSosPageModule {}
