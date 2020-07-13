import { User } from './../user.model'
import { Component, OnInit, Renderer2, ViewChild, ElementRef, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import * as _ from 'underscore'

import { FormGroup, FormControl, Validators } from '@angular/forms'

import { AuthService } from './auth.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
    loginError = false
    isLoading = false
    signUpForm: FormGroup

    constructor(private router: Router, private render: Renderer2, private authService: AuthService) {}

    ngOnInit(): void {
        this.signUpForm = new FormGroup({
            email: new FormControl(null, [ Validators.required, Validators.email ]),
            password: new FormControl(null, [ Validators.minLength(5), Validators.required ])
        })
        this.authService.autoLogin()
    }

    onSubmit() {
        this.loginError = false
        this.isLoading = true
        this.authService.login(this.signUpForm.value.email, this.signUpForm.value.password).subscribe(
            (data) => {
                this.isLoading = false
                this.router.navigate([ '/train' ])
                console.log(data)
            },
            (errorCode) => {
                this.isLoading = false
                this.setLoginError()
            }
        )
    }

    setLoginError() {
        this.loginError = true
        setTimeout(() => {
            this.loginError = false
        }, 1500)
    }
}
