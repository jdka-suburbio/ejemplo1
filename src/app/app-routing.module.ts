import { redirectLoggedInTo,
         canActivate,
         redirectUnauthorizedTo } 
         from '@angular/fire/auth-guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContenidoComponent } from './contenido/contenido.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/register']);
//const redirectLoggedInToHome = () => redirectLoggedInTo(['/register']);

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'contact', component:ContactComponent, 
      ...canActivate(redirectUnauthorizedToLogin)},
  {path: 'content', component:ContenidoComponent,
      ...canActivate(redirectUnauthorizedToLogin)},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
