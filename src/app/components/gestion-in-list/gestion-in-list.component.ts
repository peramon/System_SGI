import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-gestion-in-list',
  templateUrl: './gestion-in-list.component.html',
  styleUrls: ['./gestion-in-list.component.css']
})
export class GestionInListComponent implements OnInit {

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
      console.log(items);
    });
  }
}
