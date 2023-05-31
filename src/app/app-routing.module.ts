import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProgramacionComponent } from './programacion/programacion.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { ItemListComponent } from './components/item-list/item-list.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: "programacion", component:ProgramacionComponent},
  {path: 'item-form', component: ItemFormComponent },
  {path: 'item-form/:id', component: ItemFormComponent },
  {path: "item-list", component:ItemListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
