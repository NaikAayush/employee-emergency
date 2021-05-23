import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErtTabsPage } from './ert-tabs.page';

const routes: Routes = [
  {
    path: 'ert/ert-tabs',
    component: ErtTabsPage,
    children: [
      {
        path: 'map',
        loadChildren: () =>
          import('../tabs/ert-map/ert-map.module').then(
            (m) => m.ErtMapPageModule
          ),
      },
      {
        path: 'chat',
        loadChildren: () =>
          import('../tabs/ert-chat/ert-chat.module').then(
            (m) => m.ErtChatPageModule
          ),
      },
      {
        path: '',
        redirectTo: 'ert/ert-tabs/chat',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'ert/ert-tabs/chat',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErtTabsPageRoutingModule {}
