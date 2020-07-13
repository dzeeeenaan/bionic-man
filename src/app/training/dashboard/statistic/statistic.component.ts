import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-statistic',
    templateUrl: './statistic.component.html',
    styleUrls: [ './statistic.component.scss' ]
})
export class StatisticComponent implements OnInit {
    open: boolean = false
    submitForm: FormGroup
    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.submitForm = this.fb.group({
            name: [ null, [ Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i) ] ],
            weight: [ null, Validators.required ],
            height: [ null, Validators.required ],
            city: [ null, Validators.required ]
        })
    }
}
