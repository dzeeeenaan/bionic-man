import { UserService } from 'src/app/data.storage.service';
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
    '../../../../assets/img/tiger-roar.jpg',
    '../../../../assets/img/bionic-img.jpg',
  ];
  constructor(
    private render: Renderer2,
    private route: Router,
    private userS: UserService
  ) {}

  ngOnInit(): void {
    this.list = [
      {
        title: 'ULTRA COREE',
        description: 'big beng and many other exercises',
      },
    ];
  }

  startProgram(event) {
    // if (!this.isClicked || this.selected !== 'Level 1') {
    //     this.render.addClass(event.target, 'shake');
    //     setTimeout(() => {
    //         this.render.removeClass(event.target, 'shake');
    //     }, 500);
    // } else {
    this.route.navigate(['/train/start']);
  }
}
