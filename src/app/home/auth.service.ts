import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string) {
    return this.httpClient
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyACIJvfvI_UicIJmCHqlcZrKLZFFl_CX_o',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        map((data: User) => {
          this.user.next(data);
          console.log(data);
        })
      );
  }
}
