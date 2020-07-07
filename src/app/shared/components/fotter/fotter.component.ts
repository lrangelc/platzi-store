import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-fotter',
  templateUrl: './fotter.component.html',
  styleUrls: ['./fotter.component.scss'],
})
export class FotterComponent implements OnInit {
  emailField: FormControl;

  constructor() {
    this.emailField = new FormControl('', [
      Validators.minLength(4),
      Validators.required,
      Validators.email,
      Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/),
    ]);

    // this.emailField.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
  }

  ngOnInit(): void {}

  sendMail(): void {
    if (this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }
}
