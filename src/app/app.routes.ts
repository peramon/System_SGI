import {RouterModule, Routes} from '@angular/router';
import { ControlpanelComponent } from './components/controlpanel/controlpanel.component';
import { GestioninventarioComponent } from './components/gestioninventario/gestioninventario.component';
import { GestionprestamosComponent } from './components/gestionprestamos/gestionprestamos.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';




const APP_ROUTES:Routes = [
    {path: 'controlpanel', component: ControlpanelComponent},
    {path: 'gestioninventario', component: GestioninventarioComponent},
    {path: 'gestionprestamo', component: GestionprestamosComponent},
    {path: 'notificaciones', component: NotificacionesComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'controlpanel' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);