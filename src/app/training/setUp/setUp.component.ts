import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-setUp',
  templateUrl: './setUp.component.html',
  styleUrls: ['./setUp.component.scss'],
})
export class setUpComponent {
  user: string = '';
  accepted: boolean = false;
  constructor(private userS: UserService) {}

  ngOnInit(): void {
    this.user = this.userS.getUser();
  }
  accept() {
    this.userS.accepted();
  }
}
