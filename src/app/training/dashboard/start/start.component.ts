import { Exercise } from './../../../exercise.model';
import { UserService } from 'src/app/data.storage.service';
import { Component, OnInit, Renderer2, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: [ './start.component.scss' ]
})
export class StartComponent implements OnInit {
    exerciseName = 'Killer Core';
    roundName = 'Pripremi se';
    roundLength: number;
    restTime: number;
    countValue = 0;
    index = 14;
    type = 'train';
    plan: Exercise;
    rest = false;
    interval;
    percent: number;

    constructor(private userS: UserService, private router: Router) {}

    ngOnInit(): void {
        this.plan = this.userS.getProgram('lvl1');
        this.updateValues();
    }

    updateValues() {
        this.index = this.plan.program.length;
        if (this.index === this.plan.program.length) {
            this.endProgram();
        } else {
            const currentExercise = this.plan.program[this.index];
            if (this.rest) {
                this.roundName = 'Odmori';
                this.roundLength = this.plan.restTime;
            } else {
                this.roundName = currentExercise.name;
                this.roundLength = currentExercise.length;
                this.index += 1;
            }
            this.startClock();
            this.rest = !this.rest;
        }
    }

    endProgram() {
        this.roundName = 'Zavrsen Trening <br/> Cestitamo';
        clearInterval(this.interval);
        this.percent = null;
        setTimeout(() => {
            this.router.navigate([ '/train' ]);
        }, 10000);
    }

    startClock() {
        this.countValue = this.roundLength;
        this.interval = setInterval(() => {
            this.countValue -= 1;
            this.percent = 100 - Math.round(this.countValue / this.roundLength * 100);
            console.log(this.percent);
            if (this.countValue <= 0) {
                clearInterval(this.interval);
                this.updateValues();
            }
        }, 1000);
    }

    // pause() {
    //     this.isPaused = !this.isPaused;
    //     console.log(this.count);
    //     if (this.isPaused) {
    //         this.save = parseInt(this.count.toString());
    //     } else {
    //         this.count = this.save;
    //     }
    // }
}
