import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accessToken = '';
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.accessToken = params.access_token;
    });
  }
  // No borrar este método...
  foo(): void {
    if (this.accessToken !== '') {
      const decoded = jwt_decode(this.accessToken);
      console.log(decoded);
    }

    // TODO: Send Access Token to Strapi and Register User Information.

  }
}
