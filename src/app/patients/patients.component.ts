import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.styl'],
  // template: `
  // <h2><u>Second component</u></h2>
  //       <h3>{{title}}</h3>
  // `
})
export class PatientsComponent implements OnInit {

  patientForm = new FormGroup({
    patientName: new FormControl(''),
    pID: new FormControl(''),
    department: new FormControl(''),
    gender: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl('')
      // phone: new FormControl (''),
      // email: new FormControl('')
    })
  });

  updateProfile(){
    this.patientForm.patchValue({
      patientName: 'Neb',
      address: {
        state: 'Wisconsin'
      }
    });
  }

  onSubmit(){
    console.warn(this.patientForm.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
