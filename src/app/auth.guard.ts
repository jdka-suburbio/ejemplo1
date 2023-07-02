import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      take(1),
      map((user) => {
        if (user) {
          return true; // El usuario está autenticado, permite el acceso a la ruta
        } else {
          this.router.navigate(['/sign-in']); // El usuario no está autenticado, redirige al inicio de sesión
          return false;
        }
      })
    );
  }
}
