import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent implements OnInit {

  currentUrl;
  username;
  email;
  foundProfile = false;
  messageClass;
  message;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params; // Get URL parameters on page load in order to request correct profile data.
    // Service to get the public profile data...
    this.authService.getPublicProfile(this.currentUrl.username).subscribe(data => {
      // Check if user was found in database
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Return bootstrap error class
        this.message = data.message; // Return api error message
      } else {
        this.username = data.user.username; // Bind the username for use in template
        this.email = data.user.email; // Bind the email for use in template
        this.foundProfile = true;
      }
    });
  }

}
