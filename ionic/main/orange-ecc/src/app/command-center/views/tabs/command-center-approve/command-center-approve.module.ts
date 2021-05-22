import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandCenterApprovePageRoutingModule } from './command-center-approve-routing.module';

import { CommandCenterApprovePage } from './command-center-approve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandCenterApprovePageRoutingModule
  ],
  declarations: [CommandCenterApprovePage]
})
export class CommandCenterApprovePageModule {}
