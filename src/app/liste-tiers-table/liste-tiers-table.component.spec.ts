import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTiersTableComponent } from './liste-tiers-table.component';

describe('ListeTiersTableComponent', () => {
  let component: ListeTiersTableComponent;
  let fixture: ComponentFixture<ListeTiersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeTiersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTiersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
