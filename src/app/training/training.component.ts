import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
})
export class TrainingComponent implements OnInit {
  user: string = '';
  accepted: boolean;
  constructor(private userS: UserService) {}

  ngOnInit(): void {
    this.user = this.userS.getUser();
    console.log(this.accepted);
    if (this.userS.accept) {
      this.userS.accept.subscribe((value) => {
        this.accepted = value;
      });
    }
  }
}
