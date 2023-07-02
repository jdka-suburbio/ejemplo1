import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/shared/user-data.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  email!: string;
  password!: string;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private userDataService: UserDataService
  ) {}

  onSignIn() {
    this.afAuth
      .signInWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        console.log('Inicio de sesión exitoso:', userCredential.user);
        const userEmail = userCredential.user?.email;
        if (userEmail) {
          this.userDataService.setUserEmail(userEmail); // Almacena el correo electrónico en el servicio
        }
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.error('Error al iniciar sesión:', error);
        alert("El nombre de usuario o contraseña son incorrectos!!");
      });
  }
}
