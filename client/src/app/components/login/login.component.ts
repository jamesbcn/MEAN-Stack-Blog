import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  alert: string;
  message: string;
  messageClass: string;
  processing: boolean = false;

  constructor( private formBuilder: FormBuilder ) {
    this.createForm();
    this.alert = 'This field is required';
   }

  createForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  disableForm() {
    this.form.controls['username'].disable();
    this.form.controls['password'].disable();
  }

  enableForm() {
    this.form.controls['username'].enable();
    this.form.controls['password'].enable();
  }

  onLogin() {
    this.processing = true; // Used to disable submit button while is being processed
    this.disableForm(); // Disable form while being processed

    const user = {
      username: this.form.get('username').value, // Username input field
      password: this.form.get('password').value // Password input field
    };
  }

  ngOnInit() {
  }

}
