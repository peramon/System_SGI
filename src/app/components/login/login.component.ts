import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  constructor(private builder: FormBuilder, private authService: AuthService, private router: Router, private spinner: NgxSpinnerService) { }


  ngOnInit(): void {
    this.loginForm = this.builder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async send(values) {
    this.spinner.show();
    this.authService.logIn({
      identifier: values.email,
      password: values.password
    }).subscribe({
      next: data => {
        Swal.fire('Bienvenido', 'Ingreso realizado exitosamente', 'success');
        localStorage.setItem('accessToken', data.jwt);
        localStorage.setItem('currentUser', JSON.stringify(data.user));
        this.spinner.hide();
        this.router.navigate(['/share']);
      },
      error: error => {
        Swal.fire({
          icon: 'error',
          title: 'No se encuentra el usuario',
          text: 'Contraseña o correo incorrectos'
        });
        this.spinner.hide();
        console.error('Algo salió mal..', { error });
      }
    });
  }

}
