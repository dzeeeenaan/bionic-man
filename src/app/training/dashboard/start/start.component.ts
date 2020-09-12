import { HttpClient } from '@angular/common/http';
import { Exercise } from './../../../exercise.model';
import { DataStorageService } from 'src/app/data.storage.service';
import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { AuthService } from 'src/app/home/auth.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit, OnDestroy {
  @ViewChild('rnd') element: ElementRef;
  exerciseName = 'AB KILLER';
  nextExercise = ' next vjezba';
  roundName = 'Pripremi se';
  roundLength: number;
  restTime: number;
  countValue = 0;
  index = 0;
  type = 'train';
  plan: Exercise;
  rest = false;
  interval;
  save: number;
  isPaused = false;
  percent: number;

  constructor(
    private userS: DataStorageService,
    private router: Router,
    private http: HttpClient,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.plan = this.userS.getExerciseProgram('ABKILLER');
    this.updateValues();
  }

  updateValues() {
    if (this.index === this.plan.program.length) {
      this.endProgram();
    } else {
      const currentExercise = this.plan.program[this.index];
      if (this.rest) {
        this.nextExercise = currentExercise.name;
        this.roundName = 'REST';
        // this.render.addClass(this.element.nativeElement, 'expand');
        this.roundLength = this.plan.restTime;
      } else {
        this.roundName = currentExercise.name;
        this.roundLength = currentExercise.length;
        this.index += 1;
      }
      // this.render.removeCl(this.element.nativeElement, 'expand');
      this.startClock();
      this.rest = !this.rest;
    }
  }

  endProgram() {
    this.rest = false;
    this.roundName = `Fuck yea!!!`;
    clearInterval(this.interval);
    console.log(this.auth.loggedUser.value);
    let myScore = this.auth.loggedUser.value.myScore;
    myScore += 1;
    this.http
      .put(
        `https://recipe-train.firebaseio.com/scores/${this.auth.loggedUser.value.name}.json`,
        {
          score: myScore,
        }
      )
      .subscribe((result) => {
        console.log(result);
      });
    this.percent = null;
    setTimeout(() => {
      this.auth.loggedUser.value.myScore = myScore;
      this.router.navigate(['/train']);
    }, 3000);
  }

  startClock() {
    this.countValue = this.roundLength;
    this.interval = setInterval(() => {
      if (!this.isPaused) {
        this.countValue -= 1;
        this.percent =
          100 - Math.round((this.countValue / this.roundLength) * 100);
        console.log(this.percent);
        if (this.countValue <= 0) {
          clearInterval(this.interval);
          this.updateValues();
        }
      }
    }, 1000);
  }

  pause() {
    this.isPaused = !this.isPaused;
    if (this.isPaused) {
      this.save = this.countValue;
    } else {
      this.countValue = this.save;
    }
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
