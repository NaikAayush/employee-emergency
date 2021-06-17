import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeNTabsPageRoutingModule } from './employee-n-tabs-routing.module';

import { EmployeeNTabsPage } from './employee-n-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeNTabsPageRoutingModule
  ],
  declarations: [EmployeeNTabsPage]
})
export class EmployeeNTabsPageModule {}
