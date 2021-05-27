import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandCenterSimulationTabsPageRoutingModule } from './command-center-simulation-tabs-routing.module';

import { CommandCenterSimulationTabsPage } from './command-center-simulation-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandCenterSimulationTabsPageRoutingModule
  ],
  declarations: [CommandCenterSimulationTabsPage]
})
export class CommandCenterSimulationTabsPageModule {}
