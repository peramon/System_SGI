import { Component, OnInit, Input } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  ngOnInit(): void {
  }

}
