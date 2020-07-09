import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { ItemInterface } from '../../models/item-interface';
import { LabService } from '../../services/lab.service';
import { LabInterface } from '../../models/lab-interface';


@Component({
  selector: 'app-gestioninventario',
  templateUrl: './gestioninventario.component.html',
  styleUrls: ['./gestioninventario.component.css']
})
export class GestioninventarioComponent implements OnInit {

  recursos: ItemInterface[] = [];
  laboratorios: LabInterface[] = [];

  constructor(private router: Router,private dataItems: ItemsService, private dataStore: LabService) { }
  //private items: ItemInterface;
  ngOnInit(): void {  
    this.getListItems();
  }

  getListItems(){
    this.getLab();
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

  getLab(){
    this.dataStore.getLabs().subscribe((labs) => {
      console.log(labs);
      this.laboratorios = labs;
      });
  }

  getList(){
    this.router.navigate(['share/gestioninventario/itemList']);
  }

}
