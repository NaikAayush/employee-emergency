import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeePageRoutingModule } from './employee-routing.module';

import { EmployeePage } from './employee.page';

import { EmployeeSignInComponent } from './views/employee-auth/employee-sign-in/employee-sign-in.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EmployeePage, EmployeeSignInComponent]
})
export class EmployeePageModule { }
