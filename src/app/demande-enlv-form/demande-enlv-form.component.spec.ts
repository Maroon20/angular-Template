import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DemandeEnlvFormComponent } from "./demande-enlv-form.component";

describe("DemandeEnlvFormComponent", () => {
  let component: DemandeEnlvFormComponent;
  let fixture: ComponentFixture<DemandeEnlvFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemandeEnlvFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeEnlvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
