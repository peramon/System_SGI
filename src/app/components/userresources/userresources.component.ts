import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LabService } from '../../services/lab.service';
import { StoreItemService } from '../../services/store-item.service';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { SolicitudComponent } from '../../modals/solicitud/solicitud.component';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-userresources',
  templateUrl: './userresources.component.html',
  styleUrls: ['./userresources.component.css']
})
export class UserresourcesComponent implements OnInit {

  recursos: any[];
  laboratorio: string;
  filterPost = '';

  componentName = 'Buscar Recurso';
  redirectionRoute = 'share';
  icon = 'icon_manage.png';
  faPenSquare = faPenSquare;

  constructor(private modal: NgbModal, private router: ActivatedRoute, private storeItem: LabService, private storeItemService: StoreItemService) {
  }

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
    console.log({ resources: this.recursos });
  }
  openModal(item){
    const modalRef = this.modal.open(SolicitudComponent);
    modalRef.componentInstance.resource = item;
  }
}
