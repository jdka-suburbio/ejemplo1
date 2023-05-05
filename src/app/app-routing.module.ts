import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProgramacionComponent } from './programacion/programacion.component';
import { IngleComponent } from './video/ingle/ingle.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: "programacion", component:ProgramacionComponent},
  {path: "ingles", component:IngleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
