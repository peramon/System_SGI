import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
        alert('Correcto!');
        localStorage.setItem('accessToken', data.jwt);
        localStorage.setItem('currentUser', JSON.stringify(data.user));
        this.router.navigate(['/controlpane']);
      },
      error: error => {
        alert('Correo o contraseña inválidos!');
        console.error('There was an error!', error);
        }
    });
  }
}
