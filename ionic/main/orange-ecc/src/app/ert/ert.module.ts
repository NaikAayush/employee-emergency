import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErtPageRoutingModule } from './ert-routing.module';

import { ErtPage } from './ert.page';
import { ErtSignInComponent } from './views/ert-auth/ert-sign-in/ert-sign-in.component';
import { ErtSignUpComponent } from './views/ert-auth/ert-sign-up/ert-sign-up.component';
import { ErtTabsPageModule } from './views/ert-tabs/ert-tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErtPageRoutingModule,
    ErtTabsPageModule,
  ],
  declarations: [ErtPage, ErtSignInComponent, ErtSignUpComponent],
})
export class ErtPageModule {}
