import { Auth, 
         signInWithEmailAndPassword, 
         createUserWithEmailAndPassword,
         GoogleAuthProvider,
         signInWithPopup,
         signOut} from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) {}

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }  

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }  

  logout() {
    return signOut(this.auth);
  }
  getAuthFire(){
    return this.auth.currentUser;
  }
}
