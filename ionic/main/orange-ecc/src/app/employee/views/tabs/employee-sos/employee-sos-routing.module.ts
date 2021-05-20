import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeSosPage } from './employee-sos.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeSosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeSosPageRoutingModule {}
