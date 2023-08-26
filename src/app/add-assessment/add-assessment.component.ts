import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../services/assessment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Assessment } from '../model/assessment';

@Component({
  selector: 'app-add-assessment',
  templateUrl: './add-assessment.component.html',
  styleUrls: ['./add-assessment.component.css']
})
export class AddAssessmentComponent implements OnInit{

  patientId!: number;
  date!: Date;
  note!: string;
  assessment!:Assessment;

  constructor(private activatedRouter: ActivatedRoute, private router: Router, private assessmentService:AssessmentService, private toastrService: ToastrService){}

  ngOnInit(): void {
  
    const id: string|null = this.activatedRouter.snapshot.paramMap.get('id');

    if(id){

      this.patientId = parseInt(id);

    }
  }

  addAssessment(){

    
    console.log("valeur assessment:"+ this.assessment);

    if(this.note != null){

      console.log("nous entrons bien dans la methode add");
      this.assessment = new Assessment("random", this.patientId, new Date, this.note);
      
      this.assessmentService.addNewAssessment(this.assessment).subscribe(
        data =>{
          console.log("assessment ajouté!!!");
          this.toastrService.success('Assessment added')
          this.router.navigate(['assessment']); 
        })
    }
  }



}
