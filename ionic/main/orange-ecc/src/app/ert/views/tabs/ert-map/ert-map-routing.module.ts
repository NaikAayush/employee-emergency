import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErtMapPage } from './ert-map.page';

const routes: Routes = [
  {
    path: '',
    component: ErtMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErtMapPageRoutingModule {}
