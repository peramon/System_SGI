import { Component, OnInit } from '@angular/core';
import { BorrowService } from '../../services/borrow.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import Borrow from '../../models/borrow/borrow.interface';

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

  
  borrowId;
  borrowO;
  isMod = false;
  borrow = {
    date_limit : '',
    comment : ''
};

// Pagination
pageActual = 1;

  constructor(private borrowService: BorrowService) { }

  ngOnInit(): void {
    this.getRequests();
  }

  async getRequests() {
    this.requests = await this.borrowService.getBorrowRequestsByBorrowerId(this.currentUser.id);
    console.log('Request', this.requests);
  }

  async cancelBorrow(){
    Swal.fire({
      title: '¿ Desea cancelar la solicitud ?',
      text: 'Una vez cancelada, se eliminara la solicitud',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonColor: '#5cb85c',
      cancelButtonColor: '#d9534f',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.value) {
        this.borrowService.deleteBorrow(this.borrowId);
        console.log('IdBorrow', this.borrowId);
        Swal.fire(
          'Solicitud cancelada',
          'La solicitud ha sido eliminada',
          'info'
        ).then(val => { location.reload(); });
      }
    });
  }

  updateBorrow(){
    if(this.borrow.date_limit !== ''){
      this.borrowService.updateStatusBorrow(this.borrowId, this.borrow);
      this.borrowO = this.borrowService.getBorrowId(this.borrowId);
      this.isMod = false;
      console.log(this.borrowId);
      console.log('Borrow', this.borrowO);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Solicitud modificada correctamente',
        showConfirmButton: false,
        timer: 1000
      }).then(val => {location.reload();  });
    }else{
      console.log('LLene los campos');
      Swal.fire(
        'No se puede actualizar',
        'por favor ingrese los datos a modificar',
        'warning'
      )
    }
  }

}
