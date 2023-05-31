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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { InicioFireBaseComponent } from './inicio-fire-base/inicio-fire-base.component';
import { CrudFirebaseComponent } from './crud-firebase/crud-firebase.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ProgramacionComponent,
    CuestionarioComponent,
    IncioComponent,
    InicioFireBaseComponent,
    CrudFirebaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
