import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeChatPageRoutingModule } from './employee-chat-routing.module';

import { EmployeeChatPage } from './employee-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeChatPageRoutingModule
  ],
  declarations: [EmployeeChatPage]
})
export class EmployeeChatPageModule {}
