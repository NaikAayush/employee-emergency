import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeNTabsPage } from './employee-n-tabs.page';

const routes: Routes = [
  {
    path: 'employee-n/employee-n-tabs',
    component: EmployeeNTabsPage,
    children: [
      {
        path: 'map',
        loadChildren: () =>
          import('../tabs/employee-n-map/employee-n-map.module').then(
            (m) => m.EmployeeNMapPageModule
          ),
      },
      {
        path: 'ar',
        loadChildren: () =>
          import('../tabs/employee-n-ar/employee-n-ar.module').then(
            (m) => m.EmployeeNArPageModule
          ),
      },
      {
        path: '',
        redirectTo: 'employee-n/employee-n-tabs/map',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'employee-n/employee-n-tabs/map',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeNTabsPageRoutingModule {}
