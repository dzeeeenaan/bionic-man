import { UserService } from 'src/app/user.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prepare',
  templateUrl: './prepare.component.html',
  styleUrls: ['./prepare.component.scss'],
})
export class PrepareComponent implements OnInit {
  list: string[];
  isClicked: boolean = false;
  selected: string;
  constructor(
    private render: Renderer2,
    private route: Router,
    private userS: UserService
  ) {}

  ngOnInit(): void {
    this.list = this.userS.getProgDescription(1);
  }

  wasClicked(event, cir1, cir2, cir3) {
    this.selected = event.target.textContent;
    if (this.selected !== 'Level 1') {
      this.render.addClass(event.target, 'shake');
      setTimeout(() => {
        this.render.removeClass(event.target, 'shake');
      }, 500);
    } else {
      this.isClicked = true;
      let arr = [cir1, cir2, cir3];
      arr.forEach((value) => {
        value === event.target.parentNode
          ? this.render.addClass(value, 'whiten')
          : this.render.removeClass(value, 'whiten');
      });
    }
  }
  startProgram(event) {
    if (!this.isClicked || this.selected !== 'Level 1') {
      this.render.addClass(event.target, 'shake');
      setTimeout(() => {
        this.render.removeClass(event.target, 'shake');
      }, 500);
    } else {
      this.route.navigate(['/train/start']);
    }
  }
}
