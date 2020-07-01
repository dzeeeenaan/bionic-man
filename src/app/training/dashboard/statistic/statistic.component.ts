import { UserService } from 'src/app/user.service';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent implements OnInit {
  open: boolean = false;
  constructor(private render: Renderer2, private userS: UserService) {}

  ngOnInit(): void {}
}
