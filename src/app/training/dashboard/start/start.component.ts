import { Exercise } from './../../../exercise.model';
import { UserService } from 'src/app/user.service';
import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  @ViewChild('cont', { static: true }) cont: ElementRef;

  roundName: string = 'Trening Pocinje';
  roundLength: number;
  restTime: number;
  count: number;
  index: number = 17;
  type: string = 'train';
  plan: Exercise;

  constructor(
    private rend: Renderer2,
    private userS: UserService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.rend.addClass(this.cont.nativeElement, 'preImg');
    this.startCounter(5);

    //prepare everything

    this.plan = this.userS.getLvl1();
    setTimeout(() => {
      this.startExercise();
    }, 5000);
  }

  startExercise() {
    //set values for round
    this.prepareValues(this.type);
    this.startTimer();
  }

  prepareValues(type: string) {
    let curEl = this.plan.program[this.index];
    if (type === 'rest') {
      this.roundName = 'Odmori';
      this.roundLength = this.plan.restTime;
      this.type = 'train';
    } else {
      this.roundName = curEl.name;
      this.roundLength = curEl.length;
      this.type = 'rest';
      this.index += 1;
    }
  }

  startTimer() {
    this.count = this.roundLength;
    const cont = setInterval(() => {
      this.count -= 1;
      if (this.count <= 0) {
        if (this.index === this.plan.program.length) {
          this.finishedProgram();
          clearInterval(cont);
        } else {
          clearInterval(cont);
          this.prepareValues(this.type);
          this.startTimer();
        }
      }
    }, 1000);
  }

  finishedProgram() {
    this.roundName = 'Zavrsen Trening';
    setTimeout(() => {
      this.route.navigate(['/train']);
    }, 3000);
  }

  startCounter(time: number) {
    this.count = time;
    const int = setInterval(() => {
      this.count -= 1;
      if (this.count <= 0) clearInterval(int);
    }, 1000);
  }
}
