import { UserService } from 'src/app/data.storage.service';
import { Component, OnInit, Renderer2, Input } from '@angular/core';
import { AuthService } from 'src/app/home/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  opened: boolean;
  selected = new BehaviorSubject<string>('HOME');
  constructor(private render: Renderer2, private authService: AuthService) {}

  ngOnInit(): void {}

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
    name === '' ? this.selected : this.selected.next(name);
    this.opened = !this.opened;
  }
  logout() {
    this.authService.logout();
  }
}
