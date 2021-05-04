import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandCenterPageRoutingModule } from './command-center-routing.module';

import { CommandCenterPage } from './command-center.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandCenterPageRoutingModule
  ],
  declarations: [CommandCenterPage]
})
export class CommandCenterPageModule {}
