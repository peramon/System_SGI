import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
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

  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    ControlpanelComponent,
    GestioninventarioComponent,
    GestionprestamosComponent,
    NotificacionesComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
