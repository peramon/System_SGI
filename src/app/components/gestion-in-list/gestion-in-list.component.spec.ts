import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInListComponent } from './gestion-in-list.component';

describe('GestionInListComponent', () => {
  let component: GestionInListComponent;
  let fixture: ComponentFixture<GestionInListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionInListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
