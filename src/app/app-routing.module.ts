import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './layouts/admin/admin.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'admin/dashboard',
    pathMatch: 'full',
  }, {
    path: 'admin',
    component: AdminComponent,
    children: [{
      path: '',
      loadChildren: './admin/admin.module#AdminModule'
    }]
  },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
