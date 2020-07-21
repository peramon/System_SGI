import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlabComponent } from './userlab.component';

describe('UserlabComponent', () => {
  let component: UserlabComponent;
  let fixture: ComponentFixture<UserlabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
