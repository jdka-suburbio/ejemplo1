import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './commons/menu/menu.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { ProgramacionComponent } from './programacion/programacion.component';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';
import { IncioComponent } from './incio/incio.component';
import { IngleComponent } from './video/ingle/ingle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ProgramacionComponent,
    CuestionarioComponent,
    IncioComponent,
    IngleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
