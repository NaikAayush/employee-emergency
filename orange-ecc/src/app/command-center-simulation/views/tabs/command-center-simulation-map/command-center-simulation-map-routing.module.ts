import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandCenterSimulationMapPage } from './command-center-simulation-map.page';

const routes: Routes = [
  {
    path: '',
    component: CommandCenterSimulationMapPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandCenterSimulationMapPageRoutingModule {}
