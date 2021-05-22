import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandCenterPage } from './command-center.page';

const routes: Routes = [
  {
    path: '',
    component: CommandCenterPage
  },
  {
    path: 'command-center-approve',
    loadChildren: () => import('./views/tabs/command-center-approve/command-center-approve.module').then( m => m.CommandCenterApprovePageModule)
  },
  {
    path: 'command-center-map',
    loadChildren: () => import('./views/tabs/command-center-map/command-center-map.module').then( m => m.CommandCenterMapPageModule)
  },
  {
    path: 'command-center-tabs',
    loadChildren: () => import('./views/command-center-tabs/command-center-tabs.module').then( m => m.CommandCenterTabsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandCenterPageRoutingModule {}
