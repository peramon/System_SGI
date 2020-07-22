import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../../services/items.service';
import ItemInterface from '../../models/item/item-interface';
import { ItemIdInterface } from 'src/app/models/itemId-interface';
import { faArrowLeft, faPlusCircle} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-gestion-in-list',
  templateUrl: './gestion-in-list.component.html',
  styleUrls: ['./gestion-in-list.component.css']
})
export class GestionInListComponent implements OnInit {

   // navbar
   componentName = 'Gestión Inventario';
   redirectionRoute = 'share/gestioninventario';
   icon = 'icon_manage_loan.png';

  recurso: ItemInterface;
  itemsN: number;
  disponibles = 0;
  prestados = 0;
  enReparacion = 0;

  faArrowLeft = faArrowLeft;
  faPlusCircle = faPlusCircle;


  constructor(private router: ActivatedRoute, private itemService: ItemsService) { }

  idProducto = this.router.snapshot.params.itemId;

  ngOnInit(): void {
    this.getListItemId();
  }

  getListItems() {
    console.log(this.itemService.getItemId(this.idProducto));
  }

  getListItemId() {
    this.itemService.getItemId(this.idProducto).subscribe((items: any) => {
      this.recurso = items;
      const storeItems = this.recurso.store_items;

      storeItems.forEach(sitem => {
        console.log(sitem.status)
        if (sitem.status === 1) {
          this.disponibles++;
        } else if (sitem.status === 2) {
          this.prestados++;
        } else {
          this.enReparacion++;
        }
      });

    });
  }

}
