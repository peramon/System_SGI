import { Component, OnInit } from '@angular/core';
import { BorrowService } from '../services/borrow.service';
import Swal from 'sweetalert2';


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

  idBorrow;
  statusBorrow = { status: 1 };

  lab = JSON.parse(localStorage.getItem('lab'));
  constructor(private borrowService: BorrowService) { }

  ngOnInit(): void {
    this.getPending();
  }

  async getPending() {
    this.requests = await this.borrowService.getBorrowRequestsByLabId(this.lab.id);
  }

   updateBorrow(){
    if (this.statusBorrow.status === 2){
      Swal.fire({
        title: '¿ Desea aceptar la solicitud ?',
        icon: 'question',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#5cb85c',
        cancelButtonColor: '#d9534f',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.value) {
          console.log('Borrow', this.idBorrow);
          this.borrowService.updateStatusBorrow(this.idBorrow, this.statusBorrow);
          Swal.fire(
            'Aceptado',
            'La solicitud ha sido aprobada',
            'success'
          ).then(val => { location.reload(); });
        }
      });
    }else if(this.statusBorrow.status === 3){
      Swal.fire({
        title: '¿ Desea rechazar la solicitud ?',
        icon: 'question',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#5cb85c',
        cancelButtonColor: '#d9534f',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.value) {
          console.log('Borrow', this.idBorrow);
          this.borrowService.updateStatusBorrow(this.idBorrow, this.statusBorrow);
          Swal.fire(
            'Rechazado',
            'La solicitud ha sido rechazada',
            'info'
          ).then(val => { location.reload(); });
        }
      });
    }else{
      Swal.fire(
        'Error',
        'Ocurrio un problema al actualizar el estado',
        'error'
      )
    }
  }
}
