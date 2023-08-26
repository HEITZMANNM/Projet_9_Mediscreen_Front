import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AssessmentComponent } from './assessment/assessment.component';
import { ReportComponent } from './report/report.component';
import { AddAssessmentComponent } from './add-assessment/add-assessment.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AddPatientComponent,
    AllPatientsComponent,
    EditPatientComponent,
    AssessmentComponent,
    ReportComponent,
    AddAssessmentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
