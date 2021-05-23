import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErtChatPageRoutingModule } from './ert-chat-routing.module';

import { ErtChatPage } from './ert-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErtChatPageRoutingModule
  ],
  declarations: [ErtChatPage]
})
export class ErtChatPageModule {}
