import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { ReportComponent } from './report/report.component';
import { AddAssessmentComponent } from './add-assessment/add-assessment.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'addPatient', component: AddPatientComponent},
  {path: 'assessment/:id', component: AssessmentComponent},
  {path: 'allPatients', component: AllPatientsComponent},
  {path: 'editPatient/:id', component: EditPatientComponent},
  {path: 'report/:id', component: ReportComponent},
  {path: 'addAssessment/:id', component: AddAssessmentComponent},
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
