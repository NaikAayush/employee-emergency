import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeChatbotPageRoutingModule } from './employee-chatbot-routing.module';

import { EmployeeChatbotPage } from './employee-chatbot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeChatbotPageRoutingModule
  ],
  declarations: [EmployeeChatbotPage]
})
export class EmployeeChatbotPageModule {}
