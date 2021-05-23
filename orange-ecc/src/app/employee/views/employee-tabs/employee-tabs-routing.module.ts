import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeTabsPage } from './employee-tabs.page';

const routes: Routes = [
  {
    path: 'employee/employee-tabs',
    component: EmployeeTabsPage,
    children: [
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
        path: 'bot',
        loadChildren: () =>
          import('../tabs/employee-chatbot/employee-chatbot.module').then(
            (m) => m.EmployeeChatbotPageModule
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
