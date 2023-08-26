import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assessment } from '../model/assessment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  constructor(private http:HttpClient) { }


   getAssessmentsByPatientId(patientId:number) :Observable<Assessment[]>{

    return this.http.get<Assessment[]>(`http://localhost:8081/assessment/getByPatientId?patientId=${patientId}`).pipe(
      tap((response)=> console.table(response)));
  }

  deleteAssessment(id:string){

    return this.http.delete(`http://localhost:8081/assessment/delete?id=${id}`).pipe(
      tap((response)=> console.table(response)));
  }

  addNewAssessment(assessment: Assessment){

    return this.http.post('http://localhost:8081/assessment/add', assessment).pipe(
      tap((response)=> console.table(response)));
  }
}
