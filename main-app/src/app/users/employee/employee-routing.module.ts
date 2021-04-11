import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeePage } from './employee.page';
import { IbeaconComponent } from './ibeacon/ibeacon.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeePage,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'ibeacon',
    component: IbeaconComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeePageRoutingModule {}
