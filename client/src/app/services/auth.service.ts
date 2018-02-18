import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  domain: string;
  user: string;
  authToken: string;

  constructor(
    private http: Http
  ) {
    this.domain = 'http://localhost:8080';

   }

  registerUser(user) {
    return this.http.post(this.domain + '/authentication/register', user).map(res => res.json());
  }

  checkUsername(username) {
    return this.http.get(this.domain + '/authentication/checkUsername/' + username).map(res => res.json());
  }

  checkEmail(email) {
    return this.http.get(this.domain + '/authentication/checkEmail/' + email).map(res => res.json());
  }

  // Function to log in user (taking the user object from the back-end)
  login(user) {
    return this.http.post(this.domain + '/authentication/login', user).map(res => res.json());
}
  // Function to store user's username and token in client local storage
  storeUserData(token, user) {
    localStorage.setItem('token', token);
    // need to stringify user object before storage (localStorage only store strings)...
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token; // Assign token to be used elsewhere
    this.user = user; // Set user to be used elsewhere
  }

}
