import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandCenterApprovePage } from './command-center-approve.page';

const routes: Routes = [
  {
    path: '',
    component: CommandCenterApprovePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandCenterApprovePageRoutingModule {}
