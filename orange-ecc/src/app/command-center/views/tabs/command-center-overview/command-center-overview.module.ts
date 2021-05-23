import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandCenterOverviewPageRoutingModule } from './command-center-overview-routing.module';

import { CommandCenterOverviewPage } from './command-center-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandCenterOverviewPageRoutingModule
  ],
  declarations: [CommandCenterOverviewPage]
})
export class CommandCenterOverviewPageModule {}
