import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthService {

  domain: string = '';
  user: string;
  authToken: string;
  options: object; // used to store headers

  constructor(
    private http: Http,
  ) { }

   // Function to be used any time we need headers (whenever user needs to be authorized before they access something)
   createAuthenticationHeaders() {
      this.loadToken();

      this.options = new RequestOptions({
          headers: new Headers({
            'Content-Type': 'application/json',
            'authorization': this.authToken
          })
      });
   }

   // Function used to grab token from Local Storage (browser).
   loadToken() {
      this.authToken = localStorage.getItem('token');
   }

  registerUser(user) {
    return this.http.post(this.domain + 'authentication/register', user).map(res => res.json());
  }

  checkUsername(username) {
    return this.http.get(this.domain + 'authentication/checkUsername/' + username).map(res => res.json());
  }

  checkEmail(email) {
    return this.http.get(this.domain + 'authentication/checkEmail/' + email).map(res => res.json());
  }

  // Function to log in user (taking the user object from the back-end)
  login(user) {
    return this.http.post(this.domain + 'authentication/login', user).map(res => res.json());
}

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  loggedIn() {
    return tokenNotExpired();
  }

  // Function to store user's username and token in client local storage (the browser.) Local storage details can be seen on Chrome by clicking F12 and then Storage.
  storeUserData(token, user) {
    localStorage.setItem('token', token);
    // need to stringify user object before storage (localStorage only store strings)...
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token; // Assign token to be used elsewhere
    this.user = user; // Set user to be used elsewhere
  }

  // Function to intercept local storage on the browser to get profile info. Needs to be done in an ideal way to ensure the token isn't sent every time. We can use headers for that.
  getProfile() {
    this.createAuthenticationHeaders(); // Create headers before sending to API
    return this.http.get(this.domain + 'authentication/profile', this.options).map(res => res.json());
  }

  // Function to get public profile data
  getPublicProfile(username) {
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'authentication/publicProfile/' + username, this.options).map(res => res.json());
  }
}
