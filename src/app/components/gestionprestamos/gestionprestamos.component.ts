import { Component, OnInit } from '@angular/core';
import { BorrowService } from '../../services/borrow.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-gestionprestamos',
  templateUrl: './gestionprestamos.component.html',
  styleUrls: ['./gestionprestamos.component.css']
})
export class GestionprestamosComponent implements OnInit {
  componentName = 'Préstamos Solicitados';
  redirectionRoute = 'share';
  icon = 'icon_manage_loan.png';

  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  requests: any;
  faArrowLeft = faArrowLeft;


  constructor(private borrowService: BorrowService) { }

  ngOnInit(): void {
    this.getRequests();
  }

  async getRequests() {
    this.requests = await this.borrowService.getBorrowRequestsByBorrowerId(this.currentUser.id);
  }

}
