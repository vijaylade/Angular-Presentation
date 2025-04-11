import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertPatientComponent } from './upsert-patient.component';

describe('UpsertPatientComponent', () => {
  let component: UpsertPatientComponent;
  let fixture: ComponentFixture<UpsertPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpsertPatientComponent]
    });
    fixture = TestBed.createComponent(UpsertPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
