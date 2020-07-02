import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss'],
})
export class BmiComponent implements OnInit {
  submitForm: FormGroup;
  calculated = false;
  bmiIndex: number;
  bmiInfo: string;

  constructor() {}

  ngOnInit(): void {
    this.submitForm = new FormGroup({
      height: new FormControl(null, Validators.required),
      weight: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),
    });
  }

  getBMI() {
    if (!this.submitForm.valid) return;
    const height = this.submitForm.get('height').value;
    const weight = this.submitForm.get('weight').value;
    const age = this.submitForm.get('age').value;
    this.bmiIndex = +(
      (weight / height / height) * 10000 +
      (age > 30 ? 0.1 : -1.1)
    ).toFixed(2);
    this.bmiInfo = this.getBMIinfo(this.bmiIndex);
    this.calculated = true;
  }

  getBMIinfo(bmi: number): string {
    if (bmi < 18) return 'Previse mrsavo , fati se kasike jebo te bog.';
    if (bmi < 22) return 'Zdrava tezina , ali pojacaj malo kasiku.';
    if (bmi < 25)
      return 'Idealna tezina samo nastavi tako uz redovan trening i dobru kasiku';
    if (bmi < 28)
      return 'Ako si bilder onda je uredu , ako nisi ili smanji kasiku ili uzmi tegove ';
    if (bmi < 30)
      return 'Prepurucujem suplju kasiku i vise kretanja (debeo si)';
  }
}
