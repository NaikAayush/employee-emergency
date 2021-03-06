import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandCenterSetupPageRoutingModule } from './command-center-setup-routing.module';

import { CommandCenterSetupPage } from './command-center-setup.page';
import { CommandCenterUploadMapComponent } from './command-center-upload-map/command-center-upload-map.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandCenterSetupPageRoutingModule,
  ],
  declarations: [CommandCenterSetupPage, CommandCenterUploadMapComponent],
})
export class CommandCenterSetupPageModule {}
