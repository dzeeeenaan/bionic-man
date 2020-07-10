import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class LoginAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private rotuer: Router) {}

  canActivate() {
    if (this.authService.user.value !== null) {
      return this.rotuer.navigate(['/train/welcome']);
    }
    return true;
  }
}
