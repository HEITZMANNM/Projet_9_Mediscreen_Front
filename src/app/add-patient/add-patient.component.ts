import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { PatientService } from '../services/patient.service';
import { NewPatient } from '../model/newPatient';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  
  firstName!: string;
  lastName!: string;
  gender!: string;
  address!: string;
  birthDate!: Date;
  phoneNumber!: string;

  newPatient!: NewPatient;

constructor(private patientService: PatientService, private toastrService: ToastrService, public router: Router){}


addPatient(){

  if(this.address != null && this.birthDate != null && this.firstName != null && this.gender != null && this.lastName != null && this.phoneNumber != null)
  {
    this.newPatient = new NewPatient(this.firstName, this.lastName, this.birthDate, this.gender, this.address, this.phoneNumber);

    this.patientService.addNewPatient(this.newPatient).subscribe(
      data =>{
        this.router.navigate(['home']); 
      })
    this.toastrService.success('New Patient added with success !')
  }
  else{
    this.toastrService.error('Please complete the elements !')
  }

}

}
