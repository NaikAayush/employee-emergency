import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeNArPage } from './employee-n-ar.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeNArPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeNArPageRoutingModule {}
