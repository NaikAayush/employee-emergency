import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandCenterSimulationEmergencyPageRoutingModule } from './command-center-simulation-emergency-routing.module';

import { CommandCenterSimulationEmergencyPage } from './command-center-simulation-emergency.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandCenterSimulationEmergencyPageRoutingModule
  ],
  declarations: [CommandCenterSimulationEmergencyPage]
})
export class CommandCenterSimulationEmergencyPageModule {}
