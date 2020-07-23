import { UserresourcesComponent } from './components/userresources/userresources.component';

import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { AuthGuard } from './guards/auth.guard';



const APP_ROUTES: Routes = [
    { path: 'routePath', component: Component },
    { path: 'login', component: LoginComponent, canActivate: [OnlogGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },
    { path: '**', pathMatch: 'full', redirectTo: 'Pane' },
    { path: 'share', component: ShareComponent, canActivate: [AuthGuard] },
    { path: 'share/controlpanel', component: ControlpanelComponent, canActivate: [AuthGuard] },
    { path: 'share/gestioninventario', component: GestioninventarioComponent, canActivate: [AuthGuard, RoleGuard] },
    { path: 'share/gestionprestamo', component: GestionprestamosComponent, canActivate: [AuthGuard, UserGuard] },
    { path: 'share/notificaciones', component: NotificacionesComponent, canActivate: [AuthGuard] },
    { path: 'share/userlab', component: UserlabComponent, canActivate: [AuthGuard, UserGuard] },
    { path: 'share/userlab/store/:storeId', component: UserresourcesComponent, canActivate: [AuthGuard, UserGuard] },
    { path: 'share/gestioninventario/itemList/:itemId', component: GestionInListComponent, canActivate: [AuthGuard, RoleGuard] },
    { path: 'share/solicitudes', component: SolicitudesComponent, canActivate: [AuthGuard, RoleGuard] },
    { path: '**', pathMatch: 'full', redirectTo: 'share' }

];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
import { ControlpanelComponent } from './components/controlpanel/controlpanel.component';
import { GestioninventarioComponent } from './components/gestioninventario/gestioninventario.component';
import { GestionprestamosComponent } from './components/gestionprestamos/gestionprestamos.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { ShareComponent } from './components/share/share.component';
import { GestionInListComponent } from './components/gestion-in-list/gestion-in-list.component';
import { UserlabComponent } from './components/userlab/userlab.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { OnlogGuard } from './guards/onlog.guard';
import { RoleGuard } from './guards/role.guard';
import { UserGuard } from './guards/user.guard';



