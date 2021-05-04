import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeSignInComponent } from './views/employee-auth/employee-sign-in/employee-sign-in.component';
import { EmployeeSignUpComponent } from './views/employee-auth/employee-sign-up/employee-sign-up.component';

import { EmployeePage } from './employee.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeePage
  },
  {
    path: 'login',
    component: EmployeeSignInComponent
  },
  {
    path: 'signup',
    component: EmployeeSignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeePageRoutingModule { }
