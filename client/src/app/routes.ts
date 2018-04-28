import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PublicProfileComponent } from './components/public-profile/public-profile.component';
import { BlogComponent } from './components/blog/blog.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BlogEditComponent } from './components/blog/blog-edit/blog-edit.component';
import { DeleteBlogComponent } from './components/blog/delete-blog/delete-blog.component';

import { AuthGuard } from './services/auth-guard.service';
import { NotAuthGuard } from './services/not-auth-guard.service';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'user/:username',
        component: PublicProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'blog',
        component: BlogComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'edit-blog/:id',
        component: BlogEditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'delete-blog/:id',
        component: DeleteBlogComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NotAuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NotAuthGuard]
    },
    {
        path: '**',
        component: HomeComponent
    }
];
