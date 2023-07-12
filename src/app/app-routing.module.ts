import { redirectLoggedInTo,
  canActivate,
  redirectUnauthorizedTo } 
  from '@angular/fire/auth-guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProgramacionComponent } from './programacion/programacion.component';
import { IngleComponent } from './video/ingle/ingle.component';
import { IngliComponent } from './ingli/ingli.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/register']);
//const redirectLoggedInToHome = () => redirectLoggedInTo(['/register']);

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: "programacion", component:ProgramacionComponent},
  {path: "ingles", component:IngleComponent},
  {path: "ingli", component:IngliComponent},

  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
