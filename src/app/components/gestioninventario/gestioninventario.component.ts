import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-gestioninventario',
  templateUrl: './gestioninventario.component.html',
  styleUrls: ['./gestioninventario.component.css']
})
export class GestioninventarioComponent implements OnInit {

  constructor(private dataItems: ItemsService) { }

  ngOnInit(): void {
    this.getListItems();
  }

  getListItems(){
    this.dataItems.getItems().subscribe(items => console.log(items));
  }

}
