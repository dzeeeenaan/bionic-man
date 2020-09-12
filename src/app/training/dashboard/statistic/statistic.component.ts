import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/home/auth.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent implements OnInit {
  myScore = -1;
  friendScore = -1;
  friend: string;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.loggedUser.subscribe((user) => {
      this.myScore = user.myScore;
      this.friend = user.friend;
      this.friendScore = user.friendScore;
    });
  }
}
