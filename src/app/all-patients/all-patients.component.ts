import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Patient } from '../model/patient';
import { Router } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']
})
export class AllPatientsComponent implements OnInit{

  patients!: Patient[];
 

  constructor(private patientService: PatientService, private router: Router){}
  ngOnInit(): void {

    this.getAllPatients();

  }

  getAllPatients(){
    return this.patientService.getALlPatients().subscribe(data =>{
      this.patients = data});
  }

edit(patient:Patient){

  this.router.navigate(['editPatient', patient.id])
}

delete(id: string){

  console.log("caleur de l'id du patient supprimé ="+id)

  return this.patientService.deletePatient(id).subscribe(data =>{
    this.getAllPatients
  location.reload();
  });
}

//used for the toggle menu
isMenuOpened: boolean=false;

toggleMenu(){

  this.isMenuOpened = !this.isMenuOpened;
}

assess(patient:Patient){

  this.router.navigate(['assessment', patient.id])
}

generateReport(patient: Patient){

  this.router.navigate(['report', patient.id])
}

}
