import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;
  alert: string;
  message: string;
  messageClass: string;
  processing: boolean;

  constructor(
                private formBuilder: FormBuilder,
                public authService: AuthService,
                private router: Router
              ) {
    this.createForm();
    this.alert = 'This field is required';
    this.processing = false;
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

    // Function to send login data to API
    this.authService.login(user).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Set bootstrap error class
        this.message = data.message; // Set error message
        this.processing = false; // Enable submit button
        this.enableForm(); // Enable form for editting
        } else {
            this.messageClass = 'alert alert-success'; // Set bootstrap success class
            this.message = data.message; // Set success message

            // authService function to store user's token in client local storage
            this.authService.storeUserData(data.token, data.user);

            setTimeout(() => {
              this.router.navigate(['/dashboard']);
            }, 2000);
          }
    });
  }
}
