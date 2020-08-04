import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Rutas
import { APP_ROUTING } from './app.routes';

// Componentes

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

import { ProtectedComponent } from './components/protected/protected.component';
import { InterceptorService } from './interceptors/interceptor.service';
// import {
//   MsalModule,
//   MsalInterceptor
// } from '@azure/msal-angular';
import { ControlpanelComponent } from './components/controlpanel/controlpanel.component';
import { GestioninventarioComponent } from './components/gestioninventario/gestioninventario.component';
import { GestionprestamosComponent } from './components/gestionprestamos/gestionprestamos.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { ShareComponent } from './components/share/share.component';
import { GestionInListComponent } from './components/gestion-in-list/gestion-in-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { UserComponent } from './components/user/user.component';
import { UserlabComponent } from './components/userlab/userlab.component';
import { UserresourcesComponent } from './components/userresources/userresources.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SolicitudComponent } from './modals/solicitud/solicitud.component';

import { AutocompleteLibModule, AutocompleteLibComponent } from 'angular-ng-autocomplete';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';






// const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
    ProtectedComponent,
    ShareComponent,
    ControlpanelComponent,
    GestioninventarioComponent,
    GestionprestamosComponent,
    NotificacionesComponent,
    GestionInListComponent,
    FilterPipe,
    UserComponent,
    UserlabComponent,
    UserresourcesComponent,
    SolicitudComponent,
    NavbarComponent,
    SolicitudesComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    AutocompleteLibModule,
    NgxSpinnerModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
  ],
  entryComponents: [
    SolicitudComponent
  ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
