import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErtStatusPage } from './ert-status.page';

const routes: Routes = [
  {
    path: '',
    component: ErtStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErtStatusPageRoutingModule {}
