import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weclome',
  templateUrl: './weclome.component.html',
  styleUrls: ['./weclome.component.scss'],
})
export class WeclomeComponent implements OnInit {
  user: string = 'Dzenan';
  constructor() {}

  ngOnInit(): void {}
}
