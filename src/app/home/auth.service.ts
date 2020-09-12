import { User } from './../user.model';
import { LoggedUser } from '../LoggedUser.model';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';

interface serverScore {
  Dzeno: { score: number };
  Jasmin: { score: number };
}

interface AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable()
export class AuthService {
  loggedUser = new BehaviorSubject<LoggedUser>(null);
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
          this.loadData();
        })
      );
  }
  logout() {
    console.log(this.user != null);
    this.user.next(null);
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  autoLogin() {
    const userData: User = JSON.parse(localStorage.getItem('userLogin'));
    if (!userData) {
      return;
    } else {
      const newUser: User = new User(
        userData.email,
        userData.id,
        userData._token,
        new Date(userData._tokenExpirationDate)
      );
      this.user.next(newUser);
    }
    this.loadData();
  }
  loadData() {
    this.httpClient
      .get<serverScore>(`https://recipe-train.firebaseio.com/scores.json`)
      .subscribe((data) => {
        const name = this.user.value.email;
        if (name == 'kananovic.d@gmail.com') {
          const usero = new LoggedUser(
            'Dzeno',
            data.Dzeno.score,
            'Jasmin',
            data.Jasmin.score
          );
          this.loggedUser.next(usero);
        } else {
          const usero = new LoggedUser(
            'Jasmin',
            data.Jasmin.score,
            'Dzeno',
            data.Dzeno.score
          );
          this.loggedUser.next(usero);
        }
      });
  }
}
