import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import ItemInterface from '../../models/item/item-interface';
import { LabService } from '../../services/lab.service';
import { LabInterface } from '../../models/lab-interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import Swal from 'sweetalert2';

import { faArrowLeft, faPlusCircle } from '@fortawesome/free-solid-svg-icons';


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

  fileToUpload: any;
  imageUrl: any;

  recursos: ItemInterface[];
  laboratorios: LabInterface;
  isOn: boolean;

  // Icons
  faArrowLeft = faArrowLeft;
  faPlusCircle = faPlusCircle;

  uploadForm: FormGroup;
  constructor(private spinner: NgxSpinnerService, private formBuilder: FormBuilder, private router: Router, private dataItems: ItemsService, private dataStore: LabService) { }
  // Pagination
  pageActual = 1;
  filterPost = '';
  ngOnInit(): void {
    this.getListItems();
    this.uploadForm = this.formBuilder.group({
      itemName: ['', Validators.required],
      itemDescription: ['', Validators.required],
      itemImg: ['']
    });
  }

  async getListItems() {
    this.laboratorios = JSON.parse(localStorage.getItem('lab'));
    this.recursos = await this.dataStore.getStoreItems(this.laboratorios.id);
    console.log({ recursos: this.recursos });
  }

  getList() {
    this.router.navigate(['share/gestioninventario/itemList']);
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('itemImg').setValue(file);
    }

    const reader = new FileReader();
    reader.onload = (evt: any) => {
      this.imageUrl = evt.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  async onSubmit() {
    this.spinner.show();
    const formData = new FormData();
    const itemData = {
      name: this.uploadForm.get('itemName').value,
      description: this.uploadForm.get('itemDescription').value,
      store: this.laboratorios.id
    };
    formData.append('data', JSON.stringify(itemData));
    formData.append('files.img', this.uploadForm.get('itemImg').value);
    await this.dataItems.createItem(formData);
    this.spinner.hide();
    Swal.fire('Item creado correctamente!', `El item: ${itemData.name} se ha creado satisfactoriamente!`, 'success');
    location.reload();
  }

  cancel() {
    this.isOn = false;
  }
}
