import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErtStatusPageRoutingModule } from './ert-status-routing.module';

import { ErtStatusPage } from './ert-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErtStatusPageRoutingModule
  ],
  declarations: [ErtStatusPage]
})
export class ErtStatusPageModule {}
