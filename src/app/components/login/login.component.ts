import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import  Swal  from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  constructor(private builder: FormBuilder, private authService: AuthService, private router: Router) { } 
 

  ngOnInit(): void {
  
    this.loginForm = this.builder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async send(values) {
    this.authService.logIn({
      identifier: values.email,
      password: values.password
    }).subscribe({
      next: data => {
        Swal.fire(
          'Ingreso exitoso!',
          'click para continuar!',
          'success'
        );
        localStorage.setItem('accessToken', data.jwt);
        localStorage.setItem('currentUser', JSON.stringify(data.user));
        this.router.navigate(['/share']);
      },
      error: error => {
        Swal.fire({
          icon: 'error',
          title: 'No se encuentra el usuario',
          text: 'Contraseña o correo incorrectos'
        })
        console.error('There was an error!', error);
        }
    });
  }

}
