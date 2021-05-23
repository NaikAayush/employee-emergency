import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErtPage } from './ert.page';
import { ErtSignInComponent } from './views/ert-auth/ert-sign-in/ert-sign-in.component';
import { ErtSignUpComponent } from './views/ert-auth/ert-sign-up/ert-sign-up.component';
import { ErtVerifyComponent } from './views/ert-auth/ert-verify/ert-verify.component';

const routes: Routes = [
  {
    path: '',
    component: ErtPage,
  },
  {
    path: 'login',
    component: ErtSignInComponent,
  },
  {
    path: 'signup',
    component: ErtSignUpComponent,
  },
  {
    path: 'verify',
    component: ErtVerifyComponent,
  },
  {
    path: 'ert-tabs',
    loadChildren: () =>
      import('./views/ert-tabs/ert-tabs.module').then(
        (m) => m.ErtTabsPageModule
      ),
  },
  {
    path: 'ert-chat',
    loadChildren: () =>
      import('./views/tabs/ert-chat/ert-chat.module').then(
        (m) => m.ErtChatPageModule
      ),
  },
  {
    path: 'ert-map',
    loadChildren: () =>
      import('./views/tabs/ert-map/ert-map.module').then(
        (m) => m.ErtMapPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErtPageRoutingModule {}
