import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeTabsPageRoutingModule } from './employee-tabs-routing.module';

import { EmployeeTabsPage } from './employee-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeTabsPageRoutingModule,
  ],
  declarations: [EmployeeTabsPage],
})
export class EmployeeTabsPageModule {}
