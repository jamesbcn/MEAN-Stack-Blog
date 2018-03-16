import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router,
    private flash: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  logoutClick() {
    this.authService.logout();
    this.router.navigate(['/']);
    this.flash.show('You are now logged out', {cssClass: 'alert-info'});
  }

}
