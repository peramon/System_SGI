import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    currentUser = JSON.parse(localStorage.getItem('currentUser'));
    displayName = `${this.currentUser.name} ${this.currentUser.lastname}`;
    ngOnInit(): void {
    }
}