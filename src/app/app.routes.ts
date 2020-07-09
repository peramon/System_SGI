
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
    { path: '**', pathMatch: 'full', redirectTo: 'Pane' },
     {path: 'share', component: ShareComponent},
    {path: 'share/controlpanel', component: ControlpanelComponent},
    {path: 'share/gestioninventario', component: GestioninventarioComponent},
    {path: 'share/gestionprestamo', component: GestionprestamosComponent},
    {path: 'share/notificaciones', component: NotificacionesComponent},
    {path: 'share/gestioninventario/itemList/:itemId', component: GestionInListComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'controlpanel' }
   
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
import { ControlpanelComponent } from './components/controlpanel/controlpanel.component';
import { GestioninventarioComponent } from './components/gestioninventario/gestioninventario.component';
import { GestionprestamosComponent } from './components/gestionprestamos/gestionprestamos.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { ShareComponent } from './components/share/share.component';
import { GestionInListComponent } from './components/gestion-in-list/gestion-in-list.component';



