import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeEnlevementComponent } from './demande-enlevement.component';

describe('DemandeEnlevementComponent', () => {
  let component: DemandeEnlevementComponent;
  let fixture: ComponentFixture<DemandeEnlevementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeEnlevementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeEnlevementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
