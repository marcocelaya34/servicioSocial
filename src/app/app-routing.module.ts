import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './todo/home/home.component';
import { ReferenciasComponent } from './todo/referencias/referencias.component';
import { UnidadIComponent } from './todo/unidad-i/unidad-i.component';
import { UnidadIIComponent } from './todo/unidad-ii/unidad-ii.component';
import { UnidadIIIComponent } from './todo/unidad-iii/unidad-iii.component';
import { UnidadIVComponent } from './todo/unidad-iv/unidad-iv.component';


import { ModuleWithProviders } from "@angular/core";


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
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

];
export const appRoutingProviders: any[] = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,appRoutingProviders]
})

export class AppRoutingModule { }
