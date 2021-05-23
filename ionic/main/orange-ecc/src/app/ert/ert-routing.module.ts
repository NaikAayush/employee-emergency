import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErtPage } from './ert.page';

const routes: Routes = [
  {
    path: '',
    component: ErtPage
  },
  {
    path: 'ert-tabs',
    loadChildren: () => import('./views/ert-tabs/ert-tabs.module').then( m => m.ErtTabsPageModule)
  },
  {
    path: 'ert-chat',
    loadChildren: () => import('./views/tabs/ert-chat/ert-chat.module').then( m => m.ErtChatPageModule)
  },
  {
    path: 'ert-map',
    loadChildren: () => import('./views/tabs/ert-map/ert-map.module').then( m => m.ErtMapPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErtPageRoutingModule {}
