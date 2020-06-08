import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private render: Renderer2,
    private userS: UserService
  ) {}

  ngOnInit(): void {}

  start(name) {
    if (name.value === '999') {
      this.userS.setUser('Dzenan');
      this.router.navigate(['/train']);
    } else if (name.value === '225') {
      this.userS.setUser('Jasmin');
      this.router.navigate(['/train']);
    } else {
      this.render.addClass(name, 'shake');
      setTimeout(() => {
        this.render.removeClass(name, 'shake');
      }, 500);
    }
  }
}
