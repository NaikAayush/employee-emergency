import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandCenterPage } from './command-center.page';

const routes: Routes = [
  {
    path: '',
    component: CommandCenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandCenterPageRoutingModule {}
