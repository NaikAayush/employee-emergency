import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErtPageRoutingModule } from './ert-routing.module';

import { ErtPage } from './ert.page';
import { ErtSignInComponent } from './views/ert-auth/ert-sign-in/ert-sign-in.component';
import { ErtSignUpComponent } from './views/ert-auth/ert-sign-up/ert-sign-up.component';
import { ErtTabsPageModule } from './views/ert-tabs/ert-tabs.module';
import { ErtVerifyComponent } from './views/ert-auth/ert-verify/ert-verify.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErtPageRoutingModule,
    ReactiveFormsModule,
    ErtTabsPageModule,
  ],
  declarations: [
    ErtPage,
    ErtSignInComponent,
    ErtSignUpComponent,
    ErtVerifyComponent,
  ],
})
export class ErtPageModule {}
