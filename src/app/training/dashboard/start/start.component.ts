import { Exercise } from './../../../exercise.model'
import { UserService } from 'src/app/user.service'
import { Component, OnInit, Renderer2, ViewChild, ElementRef, OnDestroy } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: [ './start.component.scss' ]
})
export class StartComponent implements OnInit, OnDestroy {
    @ViewChild('cont', { static: true })
    cont: ElementRef

    progress_value: number = 0
    exercise_name = 'Killer Core'
    isPaused: boolean = false
    roundName: string = 'Pripremi se'
    roundLength: number
    restTime: number
    count: number | string
    index: number = 0
    type: string = 'train'
    plan: Exercise
    save: number
    main_interval: any

    constructor(private userS: UserService, private router: Router) {}

    ngOnInit(): void {
        this.plan = this.userS.getProgram('lvl1')
        setTimeout(() => {
            this.startExercise()
        }, 5000)
    }
    ngOnDestroy() {
        clearInterval(this.main_interval)
    }

    startExercise() {
        this.prepareValues(this.type)
        this.startTimer()
    }

    prepareValues(type: string) {
        let curEl = this.plan.program[this.index]
        if (type === 'rest') {
            this.roundName = 'Odmori'
            this.roundLength = this.plan.restTime
            this.type = 'train'
        } else {
            this.roundName = curEl.name
            this.roundLength = curEl.length
            this.type = 'rest'
            this.index += 1
        }
    }

    startTimer() {
        this.count = this.roundLength
        this.main_interval = setInterval(() => {
            if (!this.isPaused) {
                this.count = parseInt(this.count.toString()) - 1
                this.progress_value = 100 - this.count / this.roundLength * 100
                if (this.count <= 0) {
                    if (this.index === this.plan.program.length) {
                        this.finishedProgram()
                        clearInterval(this.main_interval)
                    } else {
                        clearInterval(this.main_interval)
                        this.prepareValues(this.type)
                        this.startTimer()
                    }
                }
            }
        }, 1000)
    }

    finishedProgram() {
        this.roundName = 'Zavrsen Trening'
        setTimeout(() => {
            this.router.navigate([ '/train' ])
        }, 3000)
    }

    pause() {
        this.isPaused = !this.isPaused
        console.log(this.count)
        if (this.isPaused) {
            this.save = parseInt(this.count.toString())
            this.count = 'Nastavi'
        } else {
            this.count = this.save
        }
    }
}
