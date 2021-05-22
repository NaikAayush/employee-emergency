import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandCenterTabsPageRoutingModule } from './command-center-tabs-routing.module';

import { CommandCenterTabsPage } from './command-center-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandCenterTabsPageRoutingModule
  ],
  declarations: [CommandCenterTabsPage]
})
export class CommandCenterTabsPageModule {}
