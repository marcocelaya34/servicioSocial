import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../todo/home/home.component';
import { UnidadIComponent } from '../todo/unidad-i/unidad-i.component';
import { UnidadIIComponent } from '../todo/unidad-ii/unidad-ii.component';
import { UnidadIIIComponent } from '../todo/unidad-iii/unidad-iii.component';
import { UnidadIVComponent } from '../todo/unidad-iv/unidad-iv.component';
import { ReferenciasComponent } from '../todo/referencias/referencias.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path:'home',
        component: HomeComponent
      },
      {
        path:'unidadI',
        component: UnidadIComponent
      },
      {
        path:'unidadII',
        component: UnidadIIComponent
      },
      {
        path:'unidadIII',
        component: UnidadIIIComponent
      },
      {
        path:'unidadIV',
        component: UnidadIVComponent
      },
      {
        path:'referencias',
        component: ReferenciasComponent
      },
      {
        path:'**',
        redirectTo : 'home'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
