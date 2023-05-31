import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { ItemListComponent } from './components/item-list/item-list.component';

const routes: Routes = [
  {path: 'item-form', component: ItemFormComponent },
  {path: 'item-form/:id', component: ItemFormComponent },
  {path: "", component:ItemListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
