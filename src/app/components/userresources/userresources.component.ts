import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LabService } from '../../services/lab.service';
import ItemInterface from '../../models/item/item-interface';
import { LabInterface } from 'src/app/models/lab-interface';
import { StoreItemService } from '../../services/store-item.service';

@Component({
  selector: 'app-userresources',
  templateUrl: './userresources.component.html',
  styleUrls: ['./userresources.component.css']
})
export class UserresourcesComponent implements OnInit {

  recursos: any[];
  // laboratorio: LabInterface[] = [];
  laboratorio: string;

  constructor(private router: ActivatedRoute, private storeItem: LabService, private storeItemService: StoreItemService) { }

  idStore = this.router.snapshot.params.storeId;

  ngOnInit(): void {
    this.getStoreItems();
    this.getStoreId();
  }

  getStoreId() {
    this.storeItem.getLabId(this.idStore).subscribe(labs => {
      this.laboratorio = labs.name;
    });
  }
  async getStoreItems() {
    this.recursos = await this.storeItemService.findStoreItemsByStoreId(this.idStore);
    console.log({resources: this.recursos});
  }

}
