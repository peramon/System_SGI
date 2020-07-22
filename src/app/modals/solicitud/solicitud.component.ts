import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, NgModel } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import Borrow from '../../models/borrow/borrow.interface';
import { BorrowService } from '../../services/borrow.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit, OnDestroy {

  @Input() public resource;
  public keyword = 'displayName';

  tutorsSub: Subscription;
  tutors: any;

  borrowForm: FormGroup;

  tutor: any;

  // date:NgModel;


  constructor(private borrowService: BorrowService, private builder: FormBuilder, public activeModal: NgbActiveModal, private userService: UserService) { }

  ngOnInit(): void {
    this.borrowForm = this.builder.group({
      comment: ['', Validators.required],
      date_limit: ['', Validators.required]
    });
    this.findTutors();
  }
  findTutors() {
    this.tutorsSub = this.userService.findTutors().pipe(map(data => {
      data.forEach(tutor => {
        const { name, lastname } = tutor;
        tutor.displayName = `${name} ${lastname}`;
      });
      return data;
    })).subscribe(val => {
      console.log(val);
      this.tutors = val;
    });
  }
  selectEvent(item) {
    this.tutor = item;
  }

  async send(values: any) {
    const { value } = values;
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const borrow: Borrow = {
      borrower: currentUser.id,
      tutor: this.tutor.id,
      store_item: this.resource.id,
      comment: value.comment,
      date_limit: value.date_limit,
      status: 1
    };
    await this.borrowService.create(borrow);
    // TODO Mejorar alerta por algo mas guapo
    Swal.fire('Solicitud creada correctamente!', 'Se notificará a tu correo electrónico cuando esta sea atendida', 'success')
    this.activeModal.close();
  }
  ngOnDestroy() {
    this.tutorsSub.unsubscribe();
  }
}
