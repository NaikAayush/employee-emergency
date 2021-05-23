import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandCenterMapPage } from './command-center-map.page';

const routes: Routes = [
  {
    path: '',
    component: CommandCenterMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandCenterMapPageRoutingModule {}
