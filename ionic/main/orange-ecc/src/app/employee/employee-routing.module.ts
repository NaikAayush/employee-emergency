import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeSignInComponent } from './views/employee-auth/employee-sign-in/employee-sign-in.component';
import { EmployeeSignUpComponent } from './views/employee-auth/employee-sign-up/employee-sign-up.component';

import { EmployeePage } from './employee.page';
import { EmployeeVerifyComponent } from './views/employee-auth/employee-verify/employee-verify.component';
import { EmployeeDashboardComponent } from './views/employee-dashboard/employee-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeePage,
  },
  {
    path: 'login',
    component: EmployeeSignInComponent,
  },
  {
    path: 'signup',
    component: EmployeeSignUpComponent,
  },
  {
    path: 'verify',
    component: EmployeeVerifyComponent,
  },
  {
    path: 'dashboard',
    component: EmployeeDashboardComponent,
  },
  {
    path: 'employee-tabs',
    loadChildren: () =>
      import('./views/employee-tabs/employee-tabs.module').then(
        (m) => m.EmployeeTabsPageModule
      ),
  },
  {
    path: 'employee-ar',
    loadChildren: () =>
      import('./views/tabs/employee-ar/employee-ar.module').then(
        (m) => m.EmployeeArPageModule
      ),
  },
  {
    path: 'employee-sos',
    loadChildren: () =>
      import('./views/tabs/employee-sos/employee-sos.module').then(
        (m) => m.EmployeeSosPageModule
      ),
  },
  {
    path: 'employee-map',
    loadChildren: () =>
      import('./views/tabs/employee-map/employee-map.module').then(
        (m) => m.EmployeeMapPageModule
      ),
  },
  {
    path: 'employee-chat',
    loadChildren: () =>
      import('./views/tabs/employee-chat/employee-chat.module').then(
        (m) => m.EmployeeChatPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeePageRoutingModule {}
