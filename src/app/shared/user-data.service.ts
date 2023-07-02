import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userEmailSource = new BehaviorSubject<string | null>(null);
  userEmail$ = this.userEmailSource.asObservable();

  setUserEmail(email: string) {
    this.userEmailSource.next(email);
  }
}
