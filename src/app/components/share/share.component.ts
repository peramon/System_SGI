import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../../services/logout.service';
import { Router } from '@angular/router';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  constructor(private logO: LogoutService, private router: Router) { }

  user;
  role: string;
  view = false;

  ngOnInit() {
    this.userType();
  }


  userType(){
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log('Usuario', this.user.role.type);
    this.role = this.user.role.type;
    if(this.role == 'storeadmin'){
      this.view = true;
      localStorage.setItem('lab', JSON.stringify(this.user.store));
      console.log('Probando user',this.view);
      console.log('Lab',this.user.store)
    }else{
      console.log('Is a applicant',this.view)
    }
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
    })
  }
}
