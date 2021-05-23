import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandCenterPage } from './command-center.page';

const routes: Routes = [
  {
    path: '',
    component: CommandCenterPage,
  },
  {
    path: 'command-center-approve',
    loadChildren: () =>
      import(
        './views/tabs/command-center-approve/command-center-approve.module'
      ).then((m) => m.CommandCenterApprovePageModule),
  },
  {
    path: 'command-center-map',
    loadChildren: () =>
      import('./views/tabs/command-center-map/command-center-map.module').then(
        (m) => m.CommandCenterMapPageModule
      ),
  },
  {
    path: 'cc-tabs',
    loadChildren: () =>
      import('./views/command-center-tabs/command-center-tabs.module').then(
        (m) => m.CommandCenterTabsPageModule
      ),
  },  {
    path: 'command-center-overview',
    loadChildren: () => import('./views/tabs/command-center-overview/command-center-overview.module').then( m => m.CommandCenterOverviewPageModule)
  },
  {
    path: 'command-center-setup',
    loadChildren: () => import('./views/tabs/command-center-setup/command-center-setup.module').then( m => m.CommandCenterSetupPageModule)
  },
  {
    path: 'command-center-emergency',
    loadChildren: () => import('./views/tabs/command-center-emergency/command-center-emergency.module').then( m => m.CommandCenterEmergencyPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandCenterPageRoutingModule {}
