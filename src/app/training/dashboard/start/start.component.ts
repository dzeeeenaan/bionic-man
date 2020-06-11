import { Exercise } from './../../../exercise.model';
import { UserService } from 'src/app/user.service';
import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  @ViewChild('cont', { static: true }) cont: ElementRef;

  isPaused: boolean = false;
  roundName: string = 'Trening Pocinje';
  roundLength: number;
  restTime: number;
  count: number | string;
  index: number = 0;
  type: string = 'train';
  plan: Exercise;
  save: number;

  constructor(
    private rend: Renderer2,
    private userS: UserService,
    private route: Router,
    private rout: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.rend.addClass(this.cont.nativeElement, 'preImg');
    this.startCounter(5);
    let input = this.rout.snapshot.params['start'];
    console.log(input);
    this.plan = this.userS.getProgram(input);

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
      if (!this.isPaused) {
        this.count = parseInt(this.count.toString()) - 1;
        console.log(this.count);
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
      this.count = parseInt(this.count.toString()) - 1;
      if (this.count <= 0) clearInterval(int);
    }, 1000);
  }

  pause() {
    this.isPaused = !this.isPaused;
    console.log(this.count);
    if (this.isPaused) {
      this.save = parseInt(this.count.toString());
      this.count = 'Nastavi';
    } else {
      this.count = this.save;
    }
  }
}
