import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeNPage } from './employee-n.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeNPage,
  },
  {
    path: 'employee-n-tabs',
    loadChildren: () =>
      import('./views/employee-n-tabs/employee-n-tabs.module').then(
        (m) => m.EmployeeNTabsPageModule
      ),
  },
  {
    path: 'employee-n-ar',
    loadChildren: () =>
      import('./views/tabs/employee-n-ar/employee-n-ar.module').then(
        (m) => m.EmployeeNArPageModule
      ),
  },
  {
    path: 'employee-n-map',
    loadChildren: () =>
      import('./views/tabs/employee-n-map/employee-n-map.module').then(
        (m) => m.EmployeeNMapPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeNPageRoutingModule {}
