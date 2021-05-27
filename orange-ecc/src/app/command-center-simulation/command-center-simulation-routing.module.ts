import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandCenterSimulationPage } from './command-center-simulation.page';

const routes: Routes = [
  {
    path: '',
    component: CommandCenterSimulationPage,
  },
  {
    path: 'cc-sim-tabs',
    loadChildren: () =>
      import(
        './views/command-center-simulation-tabs/command-center-simulation-tabs.module'
      ).then((m) => m.CommandCenterSimulationTabsPageModule),
  },
  {
    path: 'command-center-simulation-map',
    loadChildren: () =>
      import(
        './views/tabs/command-center-simulation-map/command-center-simulation-map.module'
      ).then((m) => m.CommandCenterSimulationMapPageModule),
  },
  {
    path: 'command-center-simulation-emergency',
    loadChildren: () => import('./views/tabs/command-center-simulation-emergency/command-center-simulation-emergency.module').then( m => m.CommandCenterSimulationEmergencyPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandCenterSimulationPageRoutingModule {}
