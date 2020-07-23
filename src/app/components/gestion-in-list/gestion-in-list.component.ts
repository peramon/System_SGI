import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../../services/items.service';
import ItemInterface from '../../models/item/item-interface';
import { ItemIdInterface } from 'src/app/models/itemId-interface';
import { faArrowLeft, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { JsonPipe } from '@angular/common';
import Swal from 'sweetalert2';


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
 // idItem = ((document.getElementById('id') as HTMLInputElement).value);

  isOn = false;
  isMod = false;
  date = new Date();
  dateNow = this.date.getFullYear() + '-' + (this.date.getUTCMonth() + 1 ) + '-' + this.date.getDate();
  lab = JSON.parse(localStorage.getItem('lab'));
  select = 'Seleccione';
  idItem;

  item = {
    acquisition_date: '2020-07-23',
    item: '',
    status: '',
    store: ''
  }

  constructor(private router: ActivatedRoute, private itemService: ItemsService) { }

  idProducto = this.router.snapshot.params.itemId;

  ngOnInit(): void {
    this.getListItemId();
    console.log('Date', this.dateNow.toString());
    console.log('Lab',this.lab.id);
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

  
  // TODO Controlar en un try catch posibles fallas del servidor

  saveItems(estado, status){
    // this.item.acquisition_date = this.dateNow.toString();
    if (estado !== 'Seleccione'){
      this.item.item = this.idProducto;
      this.item.status = status;
      this.item.store = this.lab.id;
      this.itemService.saveItem(this.item);
      console.log('Salvado');
      console.log('Status', status);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Item insertado correctamente',
        showConfirmButton: false,
        timer: 1300
      }).then(val => {location.reload(); });
      // TODO añadir una alerta chevere
    }else{
      console.log('Fallo el registro del item');
    }
  }

  

  deleteItem(item){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger',
        cancelButton: 'mx-4 btn btn-info'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: 'Eliminar Item',
      text: 'Seguro que desea eliminar el item',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        console.log('id', item);
        this.itemService.deleteItem(item).subscribe();
        swalWithBootstrapButtons.fire(
          'Eliminado!',
          'El item ha sido eliminado',
          'success'
        ).then(val => {location.reload(); });
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'No se elimino el item'
        );
      }
    });
  }

  updateItem(idItem, status){
    this.item.item = this.idProducto;
    this.item.status = status;
    this.item.store = this.lab.id;
    console.log('id', idItem);
    this.itemService.updateItem(idItem, this.item);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Item modificado correctamente',
      showConfirmButton: false,
      timer: 1300
    }).then(val => {location.reload(); });
  }

}
