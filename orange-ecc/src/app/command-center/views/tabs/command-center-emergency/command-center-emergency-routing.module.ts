import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandCenterEmergencyPage } from './command-center-emergency.page';

const routes: Routes = [
  {
    path: '',
    component: CommandCenterEmergencyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandCenterEmergencyPageRoutingModule {}
