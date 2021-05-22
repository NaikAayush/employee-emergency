import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandCenterOverviewPage } from './command-center-overview.page';

const routes: Routes = [
  {
    path: '',
    component: CommandCenterOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandCenterOverviewPageRoutingModule {}
