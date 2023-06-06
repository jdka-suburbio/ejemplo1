import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProgramacionComponent } from './programacion/programacion.component';
import { CreateCursosComponent } from './components/create-cursos/create-cursos.component';
import { ContactosComponent } from './components/contactos/contactos.component';

const routes: Routes = [

  {path: '', redirectTo:'create-cursos', pathMatch: 'full'},
  {path: 'create-cursos', component:CreateCursosComponent},
  {path: 'contactos', component:ContactosComponent},
  {path: '**', redirectTo: 'create-cursos', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
