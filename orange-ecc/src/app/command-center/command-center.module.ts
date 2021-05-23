import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandCenterPageRoutingModule } from './command-center-routing.module';

import { CommandCenterPage } from './command-center.page';
import { CommandCenterTabsPageModule } from './views/command-center-tabs/command-center-tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandCenterPageRoutingModule,
    CommandCenterTabsPageModule,
  ],
  declarations: [CommandCenterPage],
})
export class CommandCenterPageModule {}
