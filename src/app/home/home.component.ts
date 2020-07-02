import { User } from './../user.model';
import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'underscore';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('logButton') logButton: ElementRef;
  error = null;
  user: User;
  isLoading = false;
  signUpForm: FormGroup;
  viable: boolean = false;

  constructor(
    private router: Router,
    private render: Renderer2,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.minLength(5),
        Validators.required,
      ]),
    });

    this.authService.autoLogin();
  }

  onSubmit() {
    this.error = null;
    this.isLoading = true;
    this.authService
      .login(this.signUpForm.value.email, this.signUpForm.value.password)
      .subscribe(
        (data) => {
          this.isLoading = false;
          this.router.navigate(['/train']);
          console.log(data);
        },
        (errorCode) => {
          this.isLoading = false;
          this.error = errorCode;
        }
      );
  }

  shake() {
    this.render.addClass(this.logButton.nativeElement, 'shake');
    setTimeout(() => {
      this.render.removeClass(this.logButton.nativeElement, 'shake');
    }, 500);
  }
}
