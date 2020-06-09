import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  open: boolean;
  constructor(private render: Renderer2) {}

  ngOnInit(): void {}
}
