import { Exercise } from './exercise.model';
import { Subject } from 'rxjs';

export class UserService {
    open = new Subject<boolean>();

    private lvl1: Exercise = {
        program: [
            { name: ' 10 x 1 Hand Sklekovi ', length: 30 },
            { name: ' Plank ', length: 60 },
            { name: ' 30 x Cucnjeva', length: 40 },
            { name: ' Leg Raises', length: 60 },
            { name: ' Cat Plank ', length: 60 },
            { name: ' 10 x 1 Hand Sklekova', length: 35 },
            { name: ' Superman', length: 30 },
            { name: ' Sjedenje uz Zid ', length: 35 },
            { name: ' Side Planks L', length: 60 },
            { name: ' Side Planks R', length: 60 },
            { name: ' Biciklo ', length: 60 },
            { name: ' Plank Trcanje', length: 30 },
            { name: ' 30 x Cucnjeva', length: 30 },
            { name: ' V Plank', length: 20 },
            { name: 'Sjedenje uz Zid', length: 30 },
            { name: ' Koljeno-lakat ', length: 50 },
            { name: ' 50 x Sklekova', length: 30 },
            { name: ' Cat Plank ', length: 60 },
            { name: ' Plank Trcanje ', length: 30 }
        ],
        restTime: 20
    };

    accept = new Subject<boolean>();

    getProgram(lvl: string) {
        if (lvl === 'lvl1') {
            return this.lvl1;
        }
    }

    getProgDescription(lvl: number): string[] {
        if (lvl === 1) {
            return [ '15 Min Program', 'Sklekovi', 'Cucnjevi', 'Plank', 'Fokus na Core', 'Fokus na Stomak', 'Fokus na Noge' ];
        }
    }

    accepted() {
        this.accept.next(true);
    }
}
