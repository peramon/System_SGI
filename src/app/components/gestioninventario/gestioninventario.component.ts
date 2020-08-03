import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import ItemInterface from '../../models/item/item-interface';
import { LabService } from '../../services/lab.service';
import { LabInterface } from '../../models/lab-interface';

import { faArrowLeft, faPlusCircle} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-gestioninventario',
  templateUrl: './gestioninventario.component.html',
  styleUrls: ['./gestioninventario.component.css']
})
export class GestioninventarioComponent implements OnInit {
  // navbar
  componentName = 'Gestión Inventario';
  redirectionRoute = 'share';
  icon = 'icon_manage_loan.png';


  recursos: ItemInterface[];
  laboratorios: LabInterface;
  isOn: boolean;

  // Icons
  faArrowLeft = faArrowLeft;
  faPlusCircle = faPlusCircle;

  // Pagination
  pageActual = 1;

  constructor(private router: Router, private dataItems: ItemsService, private dataStore: LabService) { }
  filterPost = '';
  //private items: ItemInterface;
  ngOnInit(): void {
    this.getListItems();
  }

  async getListItems() {
    this.laboratorios = JSON.parse(localStorage.getItem('lab'));
    /*this.dataItems.getItems().subscribe(items => {
      console.log(items);
      this.recursos = items;
    });*/
    this.recursos = await this.dataStore.getStoreItems(this.laboratorios.id);
    console.log({ recursos: this.recursos });
    /* this.dataItems.getItems().subscribe((resp: any) => {
       this.items = resp;
       console.log(this.items);
     });*/
    //this.dataItems.getItems().subscribe((items: ItemInterface) => (this.items = items ));
  }

  /*  getLab(){
      this.laboratorios  = JSON.parse(localStorage.getItem('lab'));
     /* this.dataStore.getLabId(id).subscribe((labs) => {
        console.log('TestLab',labs);
        this.laboratorios = labs;
        });
    }*/

  getList() {
    this.router.navigate(['share/gestioninventario/itemList']);
  }

}
