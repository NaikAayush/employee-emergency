import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeaconComponent } from './beacon/beacon.component';

import { TestPage } from './test.page';
import { WifiComponent } from './wifi/wifi.component';

const routes: Routes = [
  {
    path: '',
    component: TestPage,
  },
  {
    path: 'beacon',
    component: BeaconComponent,
  },
  {
    path: 'wifi',
    component: WifiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestPageRoutingModule {}
