import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
// import { setTimeout } from 'timers'; Angular added with but then it wouldn't compile...

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  alert: string;
  email: string;
  message: string;
  messageClass: string;
  processing: boolean = false;
  emailValid: boolean;
  emailMessage: string;
  usernameValid: boolean;
  usernameMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.createForm();
    this.alert = 'This field is required';
   }

  ngOnInit() {
  }

  createForm() {
    this.form = this.formBuilder.group({
      email: [null, Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        this.validateEmail
      ])],
      username: [null, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        this.validateUsername // RegEx
      ])],
      password: [null, Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(35),
        this.validatePassword // RegEx
      ])],
      confirm: [null, Validators.required]
    }, { validator: this.matchingPasswords('password', 'confirm') }); // custom validator for matching passwords
  }

    disableForm() {
      this.form.controls['email'].disable();
      this.form.controls['username'].disable();
      this.form.controls['password'].disable();
      this.form.controls['confirm'].disable();
    }

    enableForm() {
      this.form.controls['email'].enable();
      this.form.controls['username'].enable();
      this.form.controls['password'].enable();
      this.form.controls['confirm'].enable();
  }

  validateEmail(controls) {
    const regExp = new
    RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if (regExp.test(controls.value)) {
      return null;
    } else {
      return {'validateEmail': true};
    }
  }

  validateUsername(controls) {
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);

    if (regExp.test(controls.value)) {
      return null;
    } else {
      return {'validateUsername': true};
    }
  }

  validatePassword(controls) {
    const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).*$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return {'validatePassword': true };
    }
  }

  matchingPasswords(password, confirm) {
    return (group: FormGroup) => {

      if (group.controls[password].value === group.controls[confirm].value) {
        return null; // Return as a match
      } else {
        return { 'matchingPasswords': true }; // Return as error: do not match
      }
    };
}

  onSubmit() {
    this.processing = true; // Used to notify HTML that form is in processing, so that it can be disabled
    this.disableForm();
    const user = {
      email: this.form.get('email').value,
      username: this.form.get('username').value,
      password: this.form.get('password').value
    };
    this.authService.registerUser(user).subscribe(data => {
      console.log(data);
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Set a Bootstrap error class
        this.message = data.message; // Server error response
        this.processing = false; // Re-enable submit button
        this.enableForm();
      } else {
        this.messageClass = 'alert alert-success'; // Set a Bootstrap success class
        this.message = data.message; // Server success message
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
        }
    });
  }

  // Function to check if username is still available (activated by ng-Blur)
  checkEmail() {
    const email = this.form.get('email').value;
    // Function from authentication file to check if e-mail is taken
    this.authService.checkEmail(email).subscribe(data => {

      if (!data.success && data.message) {
        this.emailValid = false; // Return email as invalid in ng-If div
        this.emailMessage = data.message; // Return error message
        } else if (!this.form.controls.email.errors) {
          this.emailValid = true; // Return email as valid in ng-If div
          this.emailMessage = data.message; // Return success message
          } else {
            this.emailMessage = null;
            }
    });
  }

  // Function to check if username is still available (activated by ng-Blur)
  checkUsername() {
    const username = this.form.get('username').value;
    // Function from authentication file to check if username is taken
    this.authService.checkUsername(username).subscribe(data => {

      if (!data.success) {
        this.usernameValid = false; // Return username as invalid in ng-If div
        this.usernameMessage = data.message; // ng-If invalid message
        } else if (!this.form.controls.username.errors) {
          this.usernameValid = true; // Return username as valid in ng-If div
          this.usernameMessage = data.message; // ng-If success message
          } else {
            this.usernameMessage = null;
            }
    });
  }

}
