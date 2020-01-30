import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBonsTableComponent } from './liste-bons-table.component';

describe('ListeBonsTableComponent', () => {
  let component: ListeBonsTableComponent;
  let fixture: ComponentFixture<ListeBonsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeBonsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBonsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
