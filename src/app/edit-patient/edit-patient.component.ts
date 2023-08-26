import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../model/patient';
import { PatientService } from '../services/patient.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit{


  lastName!: string;
  address!: string;
  phoneNumber!: string;

  patient!: Patient;
  updatedPatient!: Patient;

  constructor(private activatedRouter: ActivatedRoute, private router: Router, private patientService: PatientService, private toastrService: ToastrService){}

  ngOnInit(): void {
    
    const id: string|null = this.activatedRouter.snapshot.paramMap.get('id');

    console.log("valeur id :"+id);

this.patient = new Patient("7", "firstNameTest", "lestNameTest", new Date, "M", "addressTest", "phoneTest");


    if(id){

      this.patientService.getPatientById(id).subscribe(data =>{
        this.patient = data
      this.address = this.patient.address;
      this.lastName = this.patient.lastName;
      this.phoneNumber = this.patient.phoneNumber;

      });
    }


  }

  editPatient(){

    
if(this.lastName != null && this.address!= null && this.phoneNumber!= null){
 

this.updatedPatient = new Patient(this.patient.id, this.patient.firstName, this.lastName, this.patient.birthDate, this.patient.gender, this.address, this.phoneNumber);

console.log("valeur address : "+this.updatedPatient.address);

this.patientService.upDatePatient(this.updatedPatient).subscribe(
  data =>{
    console.log("modif serveur");
    this.toastrService.success('Patient updated')
    this.router.navigate(['allPatients']); 
  })

}
else{
this.toastrService.error('Please complete the elements !')
}

}


}
