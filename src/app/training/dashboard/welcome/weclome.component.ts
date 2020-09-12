import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/home/auth.service';

@Component({
  selector: 'app-weclome',
  templateUrl: './weclome.component.html',
  styleUrls: ['./weclome.component.scss'],
})
export class WeclomeComponent implements OnInit {
  user: string = 'Jasmin';
  constructor(private data: AuthService) {}

  ngOnInit(): void {
    this.data.loggedUser.subscribe((data) => {
      this.user = data.name;
    });
  }

  ngOnDestroy() {}
}
