import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'item-form', component: ItemFormComponent },
  {path: 'item-form/:id', component: ItemFormComponent },
  {path: "", component:ItemListComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
