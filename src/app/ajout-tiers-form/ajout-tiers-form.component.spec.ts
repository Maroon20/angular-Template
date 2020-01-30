import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTiersFormComponent } from './ajout-tiers-form.component';

describe('AjoutTiersFormComponent', () => {
  let component: AjoutTiersFormComponent;
  let fixture: ComponentFixture<AjoutTiersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutTiersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutTiersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
