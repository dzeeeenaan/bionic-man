import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  open: boolean;

  constructor(private render: Renderer2, private route: Router) {}

  ngOnInit(): void {}
}
