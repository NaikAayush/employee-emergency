import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'ert',
    redirectTo: 'ert/login',
    pathMatch: 'full',
  },
  {
    path: 'employee',
    redirectTo: 'employee/login',
    pathMatch: 'full',
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./employee/employee.module').then((m) => m.EmployeePageModule),
  },
  {
    path: 'ert',
    loadChildren: () => import('./ert/ert.module').then((m) => m.ErtPageModule),
  },
  // {
  //   path: 'ert',
  //   loadChildren: () =>
  //     import('./ert/views/ert-tabs/ert-tabs.module').then(
  //       (m) => m.ErtTabsPageModule
  //     ),
  // },
  {
    path: 'cc',
    loadChildren: () =>
      import(
        './command-center/views/command-center-tabs/command-center-tabs.module'
      ).then((m) => m.CommandCenterTabsPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'test',
    loadChildren: () =>
      import('./test/test.module').then((m) => m.TestPageModule),
  },
  {
    path: 'cc-sim',
    loadChildren: () =>
      import(
        './command-center-simulation/views/command-center-simulation-tabs/command-center-simulation-tabs.module'
      ).then((m) => m.CommandCenterSimulationTabsPageModule),
  },
  {
    path: 'employee-normal',
    loadChildren: () =>
      import('./employee-normal/employee-normal.module').then(
        (m) => m.EmployeeNormalPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
