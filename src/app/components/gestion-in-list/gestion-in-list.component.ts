import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../../services/items.service';
import { ItemInterface } from '../../models/item-interface';
import { ItemIdInterface } from 'src/app/models/itemId-interface';


@Component({
  selector: 'app-gestion-in-list',
  templateUrl: './gestion-in-list.component.html',
  styleUrls: ['./gestion-in-list.component.css']
})
export class GestionInListComponent implements OnInit {

  recurso: ItemInterface[] = [];
  items:ItemIdInterface[] = [];
  num_items:number;

  constructor(private router: ActivatedRoute, private itemService: ItemsService) { }

  idProducto = this.router.snapshot.params.itemId;

  ngOnInit(): void {
    this.getListItemId();
  }

  getListItems(){
    console.log(this.itemService.getItemId(this.idProducto));
  }

  getListItemId(){
    this.itemService.getItemId(this.idProducto).subscribe(items => {
      this.recurso = items;
      console.log('Recursos',this.recurso)
      console.log('Stores',this.recurso.store_items)
      //console.log('Stores',this.recurso.store_items.id)
      this.items = this.recurso.store_items;
      console.log(this.items);
      //console.log('Items',this.item.length)
      this.num_items = this.items.length;
    });
  }
}
