import { Exercise } from './exercise.model';
import { EventEmitter } from '@angular/core';

export class UserService {
  private user: string = 'hey';
  private lvl1: Exercise = {
    program: [
      { name: ' 20 x Sklekova ', length: 25 },
      { name: ' Plank ', length: 40 },
      { name: ' 20 x Cucnjeva', length: 30 },
      { name: ' Leg Raises', length: 30 },
      { name: ' Cat Plank ', length: 40 },
      { name: ' 20 x Sklekova', length: 25 },
      { name: ' Superman', length: 30 },
      { name: ' Sjedenje uz Zid ', length: 25 },
      { name: ' Side Planks', length: 60 },
      { name: ' Biciklo ', length: 30 },
      { name: ' Plank Trcanje', length: 30 },
      { name: ' 20 x Cucnjeva', length: 30 },
      { name: ' V Plank', length: 20 },
      { name: 'Sjedenje uz Zid', length: 20 },
      { name: ' Koljeno-lakat ', length: 30 },
      { name: ' 20 x Sklekova', length: 30 },
      { name: ' Cat Plank ', length: 40 },
      { name: ' Plank Trcanje ', length: 30 },
    ],
    restTime: 20,
  };

  accept = new EventEmitter<boolean>();

  getProgram(lvl: string) {
    if (lvl === 'lvl1') {
      return this.lvl1;
    }
  }

  getProgDescription(lvl: number): string[] {
    if (lvl === 1) {
      return [
        '15 Min Program',
        'Sklekovi',
        'Cucnjevi',
        'Plank',
        'Fokus na Core',
        'Fokus na Stomak',
        'Fokus na Noge',
      ];
    }
  }

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
