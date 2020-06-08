import { EventEmitter } from '@angular/core';

export class UserService {
  private user: string = 'hey';

  accept = new EventEmitter<boolean>();

  setUser(name: string) {
    this.user = name;
  }

  getUser() {
    return this.user;
  }

  accepted() {
    this.accept.emit(true);
  }
}
