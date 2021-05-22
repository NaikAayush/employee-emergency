import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeTabsPage } from './employee-tabs.page';

const routes: Routes = [
  {
    path: 'employee/employee-tabs',
    component: EmployeeTabsPage,
    children: [
      // {
      //   path: 'tab1',
      //   loadChildren: () =>
      //     import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
      // },
      // {
      //   path: 'tab2',
      //   loadChildren: () =>
      //     import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
      // },
      // {
      //   path: 'tab3',
      //   loadChildren: () =>
      //     import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
      // },
      {
        path: 'sos',
        loadChildren: () =>
          import('../tabs/employee-sos/employee-sos.module').then(
            (m) => m.EmployeeSosPageModule
          ),
      },
      {
        path: 'map',
        loadChildren: () =>
          import('../tabs/employee-map/employee-map.module').then(
            (m) => m.EmployeeMapPageModule
          ),
      },
      {
        path: 'chat',
        loadChildren: () =>
          import('../tabs/employee-chat/employee-chat.module').then(
            (m) => m.EmployeeChatPageModule
          ),
      },
      {
        path: 'ar',
        loadChildren: () =>
          import('../tabs/employee-ar/employee-ar.module').then(
            (m) => m.EmployeeArPageModule
          ),
      },
      {
        path: '',
        redirectTo: 'employee/employee-tabs/sos',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'employee/employee-tabs/sos',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeTabsPageRoutingModule {}
