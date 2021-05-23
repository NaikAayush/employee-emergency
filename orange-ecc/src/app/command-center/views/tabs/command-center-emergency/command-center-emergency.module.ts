import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandCenterEmergencyPageRoutingModule } from './command-center-emergency-routing.module';

import { CommandCenterEmergencyPage } from './command-center-emergency.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandCenterEmergencyPageRoutingModule
  ],
  declarations: [CommandCenterEmergencyPage]
})
export class CommandCenterEmergencyPageModule {}
