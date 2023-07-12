import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email:string="";
  clave:string="";
  constructor(private auth: AuthService, private router: Router){}

  register()
  {
    var credentials = {
      email: this.email,
      passaword: this.clave
    };
    this.auth.register(credentials);
  }

  loginGoogle()
  {
    this.auth.loginWithGoogle().then(() => {
      this.router.navigate(['/'])
    })
    .catch((e) => console.log(e.message));;
  }
}
