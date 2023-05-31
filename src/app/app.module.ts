import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Component, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, collectionData, provideFirestore,getFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    RegisterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    ToastrModule.forRoot(),
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppModule { 
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;

  constructor() {
    const aCollection = collection(this.firestore, 'items')
    this.items$ = collectionData(aCollection);
  }
}


