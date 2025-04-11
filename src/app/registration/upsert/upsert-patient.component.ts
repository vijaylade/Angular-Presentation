import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';





@Component({
  selector: 'app-upsert-patient',
  templateUrl: './upsert-patient.component.html',
  styleUrls: ['./upsert-patient.component.css']
 
})
export class UpsertPatientComponent {

  personalInfoForm!: FormGroup;
  addressForm!: FormGroup;
  otherInfoForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.personalInfoForm = this.fb.group({
    
        prefix: [''],
        first_name: [''],
        middle_name: [''],
        last_name: [''],
        gender: [''],
        mobile: [''],
        email: [''],
        weight: [''],
        height: [''],
        blood_group: [''],
        dob: [''],
        ageYears: [''],
        ageMonths: [''],
        ageDays: [''],
    });

      // ✅ Correct place to subscribe to dob valueChanges
      this.personalInfoForm.get('dob')?.valueChanges.subscribe(dob => {
        if (dob) {
          const today = new Date();
          const birthDate = new Date(dob);
          let years = today.getFullYear() - birthDate.getFullYear();
          let months = today.getMonth() - birthDate.getMonth();
          let days = today.getDate() - birthDate.getDate();
  
          if (days < 0) {
            months -= 1;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
          }
  
          if (months < 0) {
            years -= 1;
            months += 12;
          }
  
          this.personalInfoForm.patchValue({
            ageYears: years,
            ageMonths: months,
            ageDays: days
          });
        }
      });
  

    this.addressForm = this.fb.group({
      address: [''],
      state: [''],
      district: [''],
      taluka: [''],
      town: [''],
      country: [''],
      area_code: ['']
    });

    this.otherInfoForm = this.fb.group({
      idProof: [''],
      identificationNumber: [''],
      vaccineFlag: [''],
      visitReason: ['']

    });
  }


}
