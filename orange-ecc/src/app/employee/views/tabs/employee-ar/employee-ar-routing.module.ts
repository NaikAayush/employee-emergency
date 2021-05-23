import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeArPage } from './employee-ar.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeArPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeArPageRoutingModule {}
