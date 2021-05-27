import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandCenterSimulationEmergencyPage } from './command-center-simulation-emergency.page';

const routes: Routes = [
  {
    path: '',
    component: CommandCenterSimulationEmergencyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandCenterSimulationEmergencyPageRoutingModule {}
