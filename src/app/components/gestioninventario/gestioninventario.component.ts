import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { ItemInterface } from '../../models/item-einterface';


@Component({
  selector: 'app-gestioninventario',
  templateUrl: './gestioninventario.component.html',
  styleUrls: ['./gestioninventario.component.css']
})
export class GestioninventarioComponent implements OnInit {

  recursos: ItemInterface[] = [];

  constructor(private dataItems: ItemsService) { }
  //private items: ItemInterface;
  ngOnInit(): void {
    this.getListItems();
  }

  getListItems(){
    this.dataItems.getItems().subscribe(items => {
      console.log(items);
      this.recursos = items;
    });
   /* this.dataItems.getItems().subscribe((resp: any) => {
      this.items = resp;
      console.log(this.items);
    });*/
    //this.dataItems.getItems().subscribe((items: ItemInterface) => (this.items = items ));
  }

}
