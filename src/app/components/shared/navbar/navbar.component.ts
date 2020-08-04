import { Component, OnInit, Input } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { LogoutService } from 'src/app/services/logout.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  @Input() public redirectionRoute: string;
  @Input() public componentName: string;
  @Input() public icon: string;

  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  displayName = `${this.currentUser.name} ${this.currentUser.lastname}`;

  constructor(private logO: LogoutService, private router: Router) { }

  ngOnInit(): void {
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

}
