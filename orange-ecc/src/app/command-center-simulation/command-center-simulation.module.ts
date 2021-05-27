import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandCenterSimulationPageRoutingModule } from './command-center-simulation-routing.module';

import { CommandCenterSimulationPage } from './command-center-simulation.page';
import { CommandCenterSimulationTabsPageModule } from './views/command-center-simulation-tabs/command-center-simulation-tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandCenterSimulationPageRoutingModule,
    CommandCenterSimulationTabsPageModule,
  ],
  declarations: [CommandCenterSimulationPage],
})
export class CommandCenterSimulationPageModule {}
