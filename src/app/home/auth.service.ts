import { User } from './../user.model';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable()
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.httpClient
      .post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyACIJvfvI_UicIJmCHqlcZrKLZFFl_CX_o',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((data: AuthResponse) => {
          const expiringDate = +data.expiresIn * 1000;
          const newUser = new User(
            data.email,
            data.localId,
            data.idToken,
            new Date(new Date().getTime() + expiringDate)
          );
          this.user.next(newUser);
          localStorage.setItem('userLogin', JSON.stringify(newUser));
        })
      );
  }
  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.clear();
  }

  autoLogin() {
    const userData: User = JSON.parse(localStorage.getItem('userLogin'));
    if (!userData) {
      return;
    } else {
      console.log('im autologin');
      const newUser: User = new User(
        userData.email,
        userData.id,
        userData._token,
        new Date(userData._tokenExpirationDate)
      );
      console.log(newUser);
      this.user.next(newUser);
    }
  }
}
