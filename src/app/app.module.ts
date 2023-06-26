import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './commons/menu/menu.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { KeysPipe } from './pipe/keys.pipe';

//Table Material UI
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactComponent } from './contact/contact.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContenidoComponent } from './contenido/contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    KeysPipe,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    ContenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
