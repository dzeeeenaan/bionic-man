import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent implements OnInit {
  open: boolean;
  constructor(private render: Renderer2) {}

  ngOnInit(): void {}
}
