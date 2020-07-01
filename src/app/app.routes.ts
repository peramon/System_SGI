import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { AuthGuard } from './guards/auth.guard';



const APP_ROUTES: Routes = [
    { path: 'routePath', component: Component },
    { path: 'login', component: LoginComponent },
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]},
    { path: '**', pathMatch: 'full', redirectTo: 'Pane' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
