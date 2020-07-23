import { Component, OnInit } from '@angular/core';
import { BorrowService } from '../services/borrow.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  requests;
  redirectionRoute = 'share';
  componentName = 'Solicitudes de Recursos';
  icon = 'icon_loand.png';

  lab = JSON.parse(localStorage.getItem('lab'));
  constructor(private borrowService: BorrowService) { }

  ngOnInit(): void {
    this.getPending();
  }

  async getPending() {
    this.requests = await this.borrowService.getBorrowRequestsByLabId(this.lab.id);
  }

}
