import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {
  componentName = 'Notificaciones';
  redirectionRoute = 'share';
  icon = 'icon_notification.png';

  constructor() { }

  ngOnInit(): void {
  }

}
