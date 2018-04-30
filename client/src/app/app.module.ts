import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { routes } from './routes';

import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

import { AuthGuard } from './services/auth-guard.service';
import { NotAuthGuard } from './services/not-auth-guard.service';
import { AuthService } from './services/auth.service';
import { BlogService } from './services/blog.service';
import { BlogEditComponent } from './components/blog/blog-edit/blog-edit.component';
import { PublicProfileComponent } from './components/public-profile/public-profile.component';
export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    BlogComponent,
    RegisterComponent,
    LoginComponent,
    BlogEditComponent,
    PublicProfileComponent
  ],
  imports: [
    BrowserModule,
    FlashMessagesModule.forRoot(),
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    AuthGuard,
    BlogService,
    NotAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
