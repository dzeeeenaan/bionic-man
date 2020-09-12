import { DataStorageService } from 'src/app/data.storage.service';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prepare',
  templateUrl: './prepare.component.html',
  styleUrls: ['./prepare.component.scss'],
})
export class PrepareComponent implements OnInit {
  list: any[];
  isClicked: boolean = false;
  selected: string;
  images: string[] = [
    '../../../../assets/img/ab-killer.jpg',
    '../../../../assets/img/limit-breaker.jpg',
    '../../../../assets/img/ultra-core.jpg',
  ];
  constructor(
    private render: Renderer2,
    private route: Router,
    private userS: DataStorageService
  ) {}

  ngOnInit(): void {}

  startProgram(event) {
    this.route.navigate(['/train/start']);
  }
}
