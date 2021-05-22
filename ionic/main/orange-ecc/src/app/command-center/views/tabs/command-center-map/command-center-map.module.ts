import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandCenterMapPageRoutingModule } from './command-center-map-routing.module';

import { CommandCenterMapPage } from './command-center-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandCenterMapPageRoutingModule
  ],
  declarations: [CommandCenterMapPage]
})
export class CommandCenterMapPageModule {}
