import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weclome',
  templateUrl: './weclome.component.html',
  styleUrls: ['./weclome.component.scss'],
})
export class WeclomeComponent implements OnInit {
  user: string = 'User';
  constructor() {}

  ngOnInit(): void {}
}
