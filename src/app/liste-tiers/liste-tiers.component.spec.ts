import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTiersComponent } from './liste-tiers.component';

describe('ListeTiersComponent', () => {
  let component: ListeTiersComponent;
  let fixture: ComponentFixture<ListeTiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeTiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
