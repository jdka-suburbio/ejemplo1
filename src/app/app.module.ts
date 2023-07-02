import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';

import { AngularFireModule } from '@angular/fire/compat';


import { environment } from './environments/environment';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { KeysPipe } from './pipe/keys.pipe';
import { HomeComponent } from './home/home.component';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
  
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KeysPipe,
    ItemFormComponent,
    ItemListComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    AngularFireAuthModule,
  ],
  //providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
