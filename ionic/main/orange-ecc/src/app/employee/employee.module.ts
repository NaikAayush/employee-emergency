import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeePageRoutingModule } from './employee-routing.module';

import { EmployeePage } from './employee.page';

import { EmployeeSignInComponent } from './views/employee-auth/employee-sign-in/employee-sign-in.component';
import { EmployeeSignUpComponent } from './views/employee-auth/employee-sign-up/employee-sign-up.component';
import { EmployeeDashboardComponent } from './views/employee-dashboard/employee-dashboard.component';
import { EmployeeTabsPageModule } from './views/employee-tabs/employee-tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeePageRoutingModule,
    ReactiveFormsModule,
    EmployeeTabsPageModule,
  ],
  declarations: [
    EmployeePage,
    EmployeeSignInComponent,
    EmployeeSignUpComponent,
    EmployeeDashboardComponent,
  ],
})
export class EmployeePageModule {}
