import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandCenterSimulationMapPageRoutingModule } from './command-center-simulation-map-routing.module';

import { CommandCenterSimulationMapPage } from './command-center-simulation-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandCenterSimulationMapPageRoutingModule
  ],
  declarations: [CommandCenterSimulationMapPage]
})
export class CommandCenterSimulationMapPageModule {}
