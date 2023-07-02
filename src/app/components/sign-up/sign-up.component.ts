import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/shared/user-data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  email!: string;
  password!: string;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private userDataService: UserDataService
  ) {}

  onRegister() {
    this.afAuth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        console.log('Usuario registrado:', userCredential.user);
        const userEmail = userCredential.user?.email;
        if (userEmail) {
          this.userDataService.setUserEmail(userEmail); // Almacena el correo electrónico en el servicio
        }
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.error('Error al registrar usuario:', error);
      });
  }
}
