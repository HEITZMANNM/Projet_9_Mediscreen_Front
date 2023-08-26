import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { ToastrService } from 'ngx-toastr';
import { Assessment } from '../model/assessment';
import { AssessmentService } from '../services/assessment.service';
import { ReportService } from '../services/report.service';
import { ReportRiskLevel } from '../model/reportRickLevel';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit{

  constructor(private activatedRouter: ActivatedRoute, private router: Router, private patientService: PatientService, 
    private toastrService: ToastrService, private assessmentService: AssessmentService, private reportService: ReportService){}

  patient!: Patient;
  assessments!: Assessment[];
  report!: ReportRiskLevel; 
  birthdate!:string;


  ngOnInit(): void {
    
    
    const id: string|null = this.activatedRouter.snapshot.paramMap.get('id');

    if(id){

      this.patientService.getPatientById(id).subscribe(data =>{
        this.patient = data;

        this.assessmentService.getAssessmentsByPatientId(parseInt(id)).subscribe(data =>{
          this.assessments = data;
          console.log("valeur assessments : "+this.assessments[0].assessment)
          this.generateReport();
        })
      
        })
      };

  }
 

  generateReport(){

    var dateFormat = this.patient.birthDate.toString();

    var dateCut = dateFormat.substr(0, 10);

    var re = /-/gi;

    this.birthdate = dateCut.replace(re, '/');

  
return this.reportService.generateReport(this.birthdate, this.patient.gender, this.assessments).subscribe(data =>{
  this.report = data});
  }

}
