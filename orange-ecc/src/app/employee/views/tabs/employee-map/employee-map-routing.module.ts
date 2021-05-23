import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeMapPage } from './employee-map.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeMapPageRoutingModule {}
