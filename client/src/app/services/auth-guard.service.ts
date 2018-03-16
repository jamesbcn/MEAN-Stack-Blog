import { Injectable } from '@angular/core';
import { CanActivate,
         Router,
         ActivatedRouteSnapshot, // Snapshots for directing user to the requested page once logged in
         RouterStateSnapshot // (instead of to the dashboard).
         // To be placed directly into the parameters of the function instead of the constructor.
        } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  redirectUrl: string;
  // The user-requested URL that the user will be re-directed to after attempting to access
  // a page directly. Stored here.

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {

    if (this.authService.loggedIn()) {
      return true;
    } else {
      this.redirectUrl = state.url;
      // Snapshot taken here of where user is wanting to go before re-directing to login page
      this.router.navigate(['/login']);
      return false;
    }
  }

}
