import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    currentUser = '';
    ngOnInit(): void {
        // this.currentUser = 'Rick';
    }
}