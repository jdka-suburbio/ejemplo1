import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/shared/user-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userEmail: string | null = null;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private userDataService: UserDataService
  ) {}

  ngOnInit() {
    this.userDataService.userEmail$.subscribe((email) => {
      this.userEmail = email;
    });
  }

  onLogout() {
    this.afAuth.signOut()
      .then(() => {
        this.router.navigate(['/sign-in']);
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
        // Manejo de errores y mostrar mensajes al usuario
      });
  }
}
