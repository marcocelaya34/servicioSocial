import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, appRoutingProviders } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { HomeComponent } from './todo/home/home.component';
import { UnidadIComponent } from './todo/unidad-i/unidad-i.component';
import { UnidadIIComponent } from './todo/unidad-ii/unidad-ii.component';
import { UnidadIIIComponent } from './todo/unidad-iii/unidad-iii.component';
import { UnidadIVComponent } from './todo/unidad-iv/unidad-iv.component';
import { ReferenciasComponent } from './todo/referencias/referencias.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './todo/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HomeComponent,
    UnidadIComponent,
    UnidadIIComponent,
    UnidadIIIComponent,
    UnidadIVComponent,
    ReferenciasComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
    
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
