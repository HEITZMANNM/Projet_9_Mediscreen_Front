import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../model/patient';
import { AssessmentService } from '../services/assessment.service';
import { Assessment } from '../model/assessment';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit{

  patient!: Patient;
  assessments!: Assessment[];

  constructor(private activatedRouter: ActivatedRoute, private router: Router, private patientService: PatientService, 
    private toastrService: ToastrService, private assessmentService: AssessmentService){}

  ngOnInit(): void {
    
    
    const id: string|null = this.activatedRouter.snapshot.paramMap.get('id');

    if(id){

      this.patientService.getPatientById(id).subscribe(data =>{
        this.patient = data

        console.log("valeur patient :"+this.patient.firstName)

        this.getAssessmentsByPatientId();
      });
    }
  }

  getAssessmentsByPatientId(){

    return this.assessmentService.getAssessmentsByPatientId(parseInt(this.patient.id)).subscribe(data =>{
      this.assessments = data
    
      });
  }

  deleteAssessment(id: string){

    return this.assessmentService.deleteAssessment(id).subscribe(data =>{
      location.reload();
    })
  }

  addNewAssessment(patient:Patient){

    this.router.navigate(['addAssessment', patient.id])
  }

}
