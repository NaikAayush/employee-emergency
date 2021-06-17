import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeNMapPage } from './employee-n-map.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeNMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeNMapPageRoutingModule {}
