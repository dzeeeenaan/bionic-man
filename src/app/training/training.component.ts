import { Component, OnInit, HostBinding } from '@angular/core';
import { UserService } from '../data.storage.service';

@Component({
    selector: 'app-training',
    templateUrl: './training.component.html',
    styleUrls: [ './training.component.scss' ]
})
export class TrainingComponent implements OnInit {
    user = '';
    accepted: boolean;
    constructor(private userS: UserService) {}

    ngOnInit(): void {
        if (this.userS.accept) {
            this.userS.accept.subscribe((value) => {
                this.accepted = value;
            });
        }
    }
}
