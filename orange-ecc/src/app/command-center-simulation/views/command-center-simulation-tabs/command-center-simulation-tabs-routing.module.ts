import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandCenterSimulationTabsPage } from './command-center-simulation-tabs.page';

const routes: Routes = [
  {
    path: 'cc-sim/cc-sim-tabs',
    component: CommandCenterSimulationTabsPage,
    children: [
      {
        path: 'map',
        loadChildren: () =>
          import(
            '../tabs/command-center-simulation-map/command-center-simulation-map.module'
          ).then((m) => m.CommandCenterSimulationMapPageModule),
      },
      {
        path: 'emergency',
        loadChildren: () =>
          import(
            '../tabs/command-center-simulation-emergency/command-center-simulation-emergency.module'
          ).then((m) => m.CommandCenterSimulationEmergencyPageModule),
      },
      {
        path: '',
        redirectTo: 'cc-sim/cc-sim-tabs/map',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'cc-sim/cc-sim-tabs/map',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandCenterSimulationTabsPageRoutingModule {}
