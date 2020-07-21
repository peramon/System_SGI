import { Component, OnInit } from '@angular/core';
import { LabInterface } from '../../models/lab-interface';
import { LabService } from '../../services/lab.service';

@Component({
  selector: 'app-userlab',
  templateUrl: './userlab.component.html',
  styleUrls: ['./userlab.component.css']
})
export class UserlabComponent implements OnInit {

  laboratorios: LabInterface[] = [];

  constructor(private dataStore: LabService) { }

  ngOnInit(): void {
    console.log(this.getLab());
  }

  getLab(){
    this.dataStore.getLabs().subscribe((labs) => {
      console.log(labs);
      this.laboratorios = labs;
      });
  }
}
