import { UserService } from './../user.service';
import { Post } from './../post.model';
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

import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('logButton') logButton: ElementRef;
  wrongLogin: boolean;
  signUpForm: FormGroup;
  viable: boolean = false;
  userObject = {
    username: '',
    password: '',
  };

  constructor(
    private router: Router,
    private render: Renderer2,
    private postService: PostService,
    private UserS: UserService
  ) {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        this.validUsername.bind(this),
      ]),
      password: new FormControl(null, [
        Validators.minLength(5),
        Validators.required,
      ]),
    });
  }

  onSubmit() {
    this.userObject = this.signUpForm.value;
    console.log(this.userObject);
    //get login data from server
    this.postService.getActiveUsers().subscribe((result) => {
      result.forEach((value: Post) => {
        if (_.isEqual(value.data, this.userObject)) {
          this.UserS.setUser(this.userObject.username.toUpperCase());
          this.router.navigate(['/train']);
        } else {
          this.wrongLogin = true;
          this.shake();
        }
      });
    });
  }

  shake() {
    this.render.addClass(this.logButton.nativeElement, 'shake');
    setTimeout(() => {
      this.render.removeClass(this.logButton.nativeElement, 'shake');
    }, 500);
  }

  validUsername(control: FormControl): { [s: string]: boolean } {
    if (control.value) {
      if (control.value.match('^[A-Za-z0-9]+$') === null)
        return { notValid: true };
      return null;
    }
  }
}
