import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErtChatPage } from './ert-chat.page';

const routes: Routes = [
  {
    path: '',
    component: ErtChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErtChatPageRoutingModule {}
