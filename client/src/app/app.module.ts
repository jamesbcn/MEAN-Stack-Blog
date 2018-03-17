import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { MaterialModule } from './modules/material/material.module';

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FlashMessagesModule.forRoot(),
    HttpModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    AuthGuard,
    NotAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
