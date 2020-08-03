import { Component, OnInit } from '@angular/core';
import  Swal  from 'sweetalert2';
import { Router } from '@angular/router';
import { LogoutService } from '../../services/logout.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    currentUser = JSON.parse(localStorage.getItem('currentUser'));
    displayName = `${this.currentUser.name} ${this.currentUser.lastname}`;
    solOn = true;

    constructor(private logO: LogoutService, private router: Router){}
    ngOnInit(): void {
        this.enableSol();
    }

    logOut(){
        Swal.fire({
          title: 'CERRAR SESIÓN',
          background: '#ffff',
          text: '¿Seguro que desea salir?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '	#5cb85c',
          cancelButtonColor: '#d9534f',
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'Aceptar',
        }).then((result) => {
          if (result.value) {
            this.logO.logOut();
            this.router.navigate(['login']);
          }
        });
    }

    enableSol(){
        if (this.currentUser.role.name !== 'Authenticated'){
            this.solOn = false;
        }
    }

}