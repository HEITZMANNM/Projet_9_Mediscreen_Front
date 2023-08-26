import { Injectable } from '@angular/core';
import { Assessment } from '../model/assessment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ReportRiskLevel } from '../model/reportRickLevel';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http:HttpClient) { }


  generateReport(birthdate:string, gender: string, assessments: Assessment[]): Observable<ReportRiskLevel>{

   
  return this.http.post<ReportRiskLevel>(`http://localhost:8082/report/generate?birthdate=${birthdate}&gender=${gender}`, assessments).pipe(
tap((response)=> console.table(response)));
}
}
