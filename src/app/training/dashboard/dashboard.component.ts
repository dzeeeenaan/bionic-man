import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  open: boolean;
  constructor(private render: Renderer2, private route: Router) {}

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

  navigate(item) {
    switch (item.textContent) {
      case 'Trening':
        this.route.navigate(['train/prepare']);
        break;
      case 'Statistika':
        this.route.navigate(['train/statistic']);
        break;
      case 'Quote':
        this.route.navigate(['train/quoutes']);
        break;
    }
  }
}
