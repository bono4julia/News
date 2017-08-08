import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [{
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }, {
    path: 'list',
    loadChildren: 'app/pages/list/list.module#ListModule'
  }, {
    path: 'details/:id',
    loadChildren: 'app/pages/details/details.module#DetailsModule'
  }, {
    path: 'add',
    loadChildren: 'app/pages/add/add.module#AddModule'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
