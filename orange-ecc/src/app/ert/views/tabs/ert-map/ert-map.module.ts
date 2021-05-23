import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErtMapPageRoutingModule } from './ert-map-routing.module';

import { ErtMapPage } from './ert-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErtMapPageRoutingModule
  ],
  declarations: [ErtMapPage]
})
export class ErtMapPageModule {}
