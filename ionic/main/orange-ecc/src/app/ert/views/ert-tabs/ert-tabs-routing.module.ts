import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErtTabsPage } from './ert-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: ErtTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErtTabsPageRoutingModule {}
