import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accessToken = '';
  constructor(private route: ActivatedRoute, private spinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.accessToken = params.access_token;
    });
    this.spinner();
  }
  // No borrar este método...
  foo(): void {
    if (this.accessToken !== '') {
      const decoded = jwt_decode(this.accessToken);
      console.log(decoded);
    }

    // TODO: Send Access Token to Strapi and Register User Information.

  }

  spinner(): void{
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000);
  }
}
