import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LabService } from '../../services/lab.service';
import { ItemInterface } from '../../models/item-interface';
import { LabInterface } from 'src/app/models/lab-interface';

@Component({
  selector: 'app-userresources',
  templateUrl: './userresources.component.html',
  styleUrls: ['./userresources.component.css']
})
export class UserresourcesComponent implements OnInit {

  recursos: ItemInterface[] = [];
  // laboratorio: LabInterface[] = [];
  laboratorio: string;

  constructor(private router: ActivatedRoute, private storeItem: LabService) { }

  idStore = this.router.snapshot.params.storeId;

  ngOnInit(): void {
    console.log('Id', this.idStore);
    this.getStoreItems();
    this.getStoreId();
  }

  getStoreId(){
    this.storeItem.getLabId(this.idStore).subscribe(labs=>{
      this.laboratorio = labs.name;
      console.log('Laboratorios',labs.name)
    })
  }
  getStoreItems(){
    this.storeItem.getStoreResource(this.idStore).subscribe(items => {
      this.recursos = items;
      console.log('Recursos',this.recursos)

    });
  }

}
