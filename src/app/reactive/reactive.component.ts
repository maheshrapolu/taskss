import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private SA: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.SA.group({
          title: ['', Validators.required],
          firstName: ['',[Validators.required, Validators.pattern("^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$")]],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required],
          
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  // onReset() {
  //     this.submitted = false;
  //     this.registerForm.reset();
  // }
}