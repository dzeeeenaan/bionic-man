import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    return this.authService.user.pipe(
      map((data) => {
        return !!data;
      }),
      tap((isAuth) => {
        if (isAuth) {
          return true;
        } else {
          return this.router.navigate(['/login']);
        }
      })
    );
  }
}
