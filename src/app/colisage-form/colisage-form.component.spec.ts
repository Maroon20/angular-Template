import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColisageFormComponent } from './colisage-form.component';

describe('ColisageFormComponent', () => {
  let component: ColisageFormComponent;
  let fixture: ComponentFixture<ColisageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColisageFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColisageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
