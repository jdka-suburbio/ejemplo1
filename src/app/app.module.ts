import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
=======
import { FormsModule } from '@angular/forms';

>>>>>>> 48588f1bec8e12ae7564749c06082665ac642197
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
<<<<<<< HEAD
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
=======
import { HttpClientModule } from '@angular/common/http';
import { KeysPipe } from './pipe/keys.pipe';

>>>>>>> 48588f1bec8e12ae7564749c06082665ac642197

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ItemFormComponent,
    ItemListComponent
=======
    HomeComponent,
    MenuComponent,
    KeysPipe
>>>>>>> 48588f1bec8e12ae7564749c06082665ac642197
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
<<<<<<< HEAD
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
=======
    HttpClientModule,
    FormsModule
>>>>>>> 48588f1bec8e12ae7564749c06082665ac642197
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
