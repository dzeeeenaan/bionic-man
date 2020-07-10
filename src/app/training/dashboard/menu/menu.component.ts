import { UserService } from 'src/app/user.service';
import { Component, OnInit, Renderer2, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/home/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  opened: boolean;
  selected: string;

  constructor(private render: Renderer2, private authService: AuthService) {}

  ngOnInit(): void {
    this.selected = 'POCETNA';
  }

  wasClicked(event, cir1, cir2, cir3) {
    console.log(event.target.parentNode);
    let arr = [cir1, cir2, cir3];
    arr.forEach((value) => {
      value === event.target.parentNode
        ? this.render.addClass(value, 'whiten')
        : this.render.removeClass(value, 'whiten');
    });
  }

  open(name: string) {
    name === '' ? this.selected : (this.selected = name);
    this.opened = !this.opened;
  }
  logout() {
    this.authService.logout();
  }
}
