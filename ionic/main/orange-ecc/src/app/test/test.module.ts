import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestPageRoutingModule } from './test-routing.module';

import { TestPage } from './test.page';
import { BeaconComponent } from './beacon/beacon.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TestPageRoutingModule],
  declarations: [TestPage, BeaconComponent],
})
export class TestPageModule {}
