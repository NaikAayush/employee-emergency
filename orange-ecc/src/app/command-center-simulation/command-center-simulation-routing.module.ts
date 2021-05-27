import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandCenterSimulationPage } from './command-center-simulation.page';

const routes: Routes = [
  {
    path: '',
    component: CommandCenterSimulationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandCenterSimulationPageRoutingModule {}
