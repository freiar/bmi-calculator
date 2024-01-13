import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  form!: FormGroup
  bmiResult!: number

  ngOnInit() {
    this.setFormValues();
  }

  setFormValues() {
    this.form = new FormGroup({
      weight: new FormControl("", Validators.required),
      height: new FormControl("", Validators.required)
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.calculateBmi();
      console.log("valid!");
    } else {
      // error message
      this.form.markAllAsTouched();
      console.log("invalid");
    }
  }

  calculateBmi() {
    let weight = this.form.get("weight")?.value;
    let height = this.form.get("height")?.value;
    let bmi = weight / (height * height);
    this.bmiResult = Math.round(bmi * 100) / 100;
  }
}
