import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErtPageRoutingModule } from './ert-routing.module';

import { ErtPage } from './ert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErtPageRoutingModule
  ],
  declarations: [ErtPage]
})
export class ErtPageModule {}
