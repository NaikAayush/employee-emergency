import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users/employee',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'test',
    loadChildren: () =>
      import('./test/test/test.module').then((m) => m.TestPageModule),
  },
  {
    path: 'ibeacon',
    loadChildren: () =>
      import('./test/ibeacon/ibeacon.module').then((m) => m.IbeaconPageModule),
  },
  {
    path: 'users/employee',
    loadChildren: () =>
      import('./users/employee/employee.module').then(
        (m) => m.EmployeePageModule
      ),
  },
  {
    path: 'map',
    loadChildren: () =>
      import('./test/map/map.module').then((m) => m.MapPageModule),
  },
  {
    path: 'users/command-center',
    loadChildren: () =>
      import('./users/command-center/command-center.module').then(
        (m) => m.CommandCenterPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
