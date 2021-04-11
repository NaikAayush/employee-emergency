import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandCenterPageRoutingModule } from './command-center-routing.module';

import { CommandCenterPage } from './command-center.page';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandCenterPageRoutingModule,
  ],
  declarations: [CommandCenterPage, DashboardComponent],
})
export class CommandCenterPageModule {}
