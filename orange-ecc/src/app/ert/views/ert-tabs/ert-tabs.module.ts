import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErtTabsPageRoutingModule } from './ert-tabs-routing.module';

import { ErtTabsPage } from './ert-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErtTabsPageRoutingModule
  ],
  declarations: [ErtTabsPage]
})
export class ErtTabsPageModule {}
