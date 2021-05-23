import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandCenterTabsPage } from './command-center-tabs.page';

const routes: Routes = [
  {
    path: 'cc/cc-tabs',
    component: CommandCenterTabsPage,
    children: [
      {
        path: 'approve',
        loadChildren: () =>
          import(
            '../tabs/command-center-approve/command-center-approve.module'
          ).then((m) => m.CommandCenterApprovePageModule),
      },
      {
        path: 'map',
        loadChildren: () =>
          import('../tabs/command-center-map/command-center-map.module').then(
            (m) => m.CommandCenterMapPageModule
          ),
      },
      {
        path: 'overview',
        loadChildren: () =>
          import(
            '../tabs/command-center-overview/command-center-overview.module'
          ).then((m) => m.CommandCenterOverviewPageModule),
      },
      {
        path: 'setup',
        loadChildren: () =>
          import(
            '../tabs/command-center-setup/command-center-setup.module'
          ).then((m) => m.CommandCenterSetupPageModule),
      },
      {
        path: 'emergency',
        loadChildren: () =>
          import(
            '../tabs/command-center-emergency/command-center-emergency.module'
          ).then((m) => m.CommandCenterEmergencyPageModule),
      },
      {
        path: '',
        redirectTo: 'cc/cc-tabs/overview',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'cc/cc-tabs/overview',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandCenterTabsPageRoutingModule {}
