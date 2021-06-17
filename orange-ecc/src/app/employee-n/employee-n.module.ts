import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeNPageRoutingModule } from './employee-n-routing.module';

import { EmployeeNPage } from './employee-n.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeNPageRoutingModule
  ],
  declarations: [EmployeeNPage]
})
export class EmployeeNPageModule {}
