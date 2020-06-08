import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private render: Renderer2) {}

  ngOnInit(): void {}

  wasClicked(event, cir1, cir2, cir3) {
    let arr = [cir1, cir2, cir3];
    arr.forEach((value) => {
      value === event.target
        ? this.render.addClass(value, 'whiten')
        : this.render.removeClass(value, 'whiten');
    });
  }
}
