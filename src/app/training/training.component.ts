import { Component, OnInit, HostBinding } from '@angular/core';
import { DataStorageService } from '../data.storage.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
})
export class TrainingComponent implements OnInit {
  user = '';
  accepted: boolean;
  constructor() {}

  ngOnInit(): void {}
}
