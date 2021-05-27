import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandCenterSimulationPageRoutingModule } from './command-center-simulation-routing.module';

import { CommandCenterSimulationPage } from './command-center-simulation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandCenterSimulationPageRoutingModule
  ],
  declarations: [CommandCenterSimulationPage]
})
export class CommandCenterSimulationPageModule {}
