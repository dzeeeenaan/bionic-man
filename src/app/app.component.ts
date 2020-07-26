import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { AuthService } from './home/auth.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        this.authService.autoLogin()
        window.addEventListener('resize', () => {
            this.resetHeight()
        })
    }

    resetHeight() {
        document.body.style.height = window.innerHeight + 'px'
    }
}
