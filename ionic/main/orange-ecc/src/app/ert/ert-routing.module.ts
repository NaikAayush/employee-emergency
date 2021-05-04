import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErtPage } from './ert.page';

const routes: Routes = [
  {
    path: '',
    component: ErtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErtPageRoutingModule {}
