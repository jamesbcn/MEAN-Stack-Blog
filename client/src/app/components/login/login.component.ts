import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AuthGuard } from '../../services/auth-guard.service';
import { Router } from '@angular/router';

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
  previousUrl: string; // After being re-directed here

  constructor(
                private formBuilder: FormBuilder,
                public authService: AuthService,
                private router: Router,
                private authGuard: AuthGuard
              ) {
    this.createForm();
    this.alert = 'This field is required';
   }

   ngOnInit() {
     if (this.authGuard.redirectUrl) {
       // if the property exists then we know that the user was re-directed here.
       this.previousUrl = this.authGuard.redirectUrl;
       this.authGuard.redirectUrl = undefined; // Clear the state once previousUrl is saved
       this.messageClass = 'alert alert-danger';
       this.message = 'You must be logged in to view that page';
     }
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

              if (this.previousUrl) {
                // If user was re-directed from an unauthorised page then direct back
                // after successful login...
                this.router.navigate([this.previousUrl]);
              } else {
                // Else direct to default (dashboard).
                this.router.navigate(['/dashboard']);
              }
            }, 2000);
          }
    });
  }
}
