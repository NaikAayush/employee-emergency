import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeChatPage } from './employee-chat.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeChatPageRoutingModule {}
