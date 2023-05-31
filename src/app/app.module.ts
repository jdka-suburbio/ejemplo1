import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environments/environment';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { FormsModule } from '@angular/forms';
import { ItemListComponent } from './components/item-list/item-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ItemFormComponent,
    ItemListComponent
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
