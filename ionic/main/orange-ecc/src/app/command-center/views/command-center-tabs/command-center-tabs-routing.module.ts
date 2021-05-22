import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandCenterTabsPage } from './command-center-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: CommandCenterTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandCenterTabsPageRoutingModule {}
