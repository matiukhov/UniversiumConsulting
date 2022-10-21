import { Injectable } from '@angular/core';
import { User } from '../data/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public signIn(data: User): boolean {
    if (data != null && data.login === 'login' && data.password === '123') {
      localStorage.setItem('token', 'get some token');
      return true;
    }

    return false;
  }

  public isSignIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  public logout() {
    localStorage.removeItem('token');
  }
}
