import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exercise } from './exercise.model';
import { Subject } from 'rxjs';
import { AuthService } from './home/auth.service';

@Injectable()
export class DataStorageService {
  open = new Subject<boolean>();

  constructor() {}

  private ab_killer: Exercise = {
    program: [
      { name: ' Plank ', length: 40 },
      { name: ' Leg Raises Slow ', length: 30 },
      { name: ' Cat Plank', length: 40 },
      { name: ' Bicycle Slow ', length: 30 },
      { name: ' Crunches ', length: 30 },
      { name: ' Plank Left Side ', length: 30 },
      { name: ' Plank Right Side', length: 30 },
      { name: ' Elbow-Knee Slow ', length: 30 },
      { name: ' Running Plank ', length: 30 },
      { name: ' V Plank ', length: 40 },
      { name: ' Bicycle Fast ', length: 30 },
      { name: ' Plank', length: 40 },
      { name: ' Leg Raises Fast', length: 30 },
      { name: ' Elbow-Knee Fast', length: 30 },
      { name: ' Crunches ', length: 30 },
      { name: ' Plank Left Side', length: 40 },
      { name: ' Plank Right Side', length: 40 },
      { name: ' Final Leg Raises Slow', length: 40 },
    ],
    restTime: 20,
  };

  private ultra_core: Exercise = {
    program: [
      { name: ' 5 x 1 Hand Sklekovi ', length: 35 },
      { name: ' Plank ', length: 60 },
      { name: ' 30 x Cucnjeva', length: 40 },
      { name: ' Leg Raises', length: 60 },
      { name: ' Cat Plank ', length: 60 },
      { name: ' 5 x 1 Hand Sklekova', length: 35 },
      { name: ' Biciklo ', length: 60 },
      { name: ' Superman', length: 30 },
      { name: ' Sjedenje uz Zid ', length: 50 },
      { name: ' Side Planks L', length: 60 },
      { name: ' Side Planks R', length: 60 },
      { name: ' Plank Trcanje', length: 30 },
      { name: ' 30 x Cucnjeva', length: 30 },
      { name: ' V Plank', length: 30 },
      { name: ' Sjedenje uz Zid', length: 50 },
      { name: ' Koljeno-lakat ', length: 60 },
      { name: ' 50 x Sklekova', length: 30 },
      { name: ' Cat Plank ', length: 60 },
      { name: ' Plank Trcanje ', length: 30 },
    ],
    restTime: 25,
  };

  getExerciseProgram(prog: string): Exercise {
    if (prog == 'ABKILLER') return this.ab_killer;
  }
}
