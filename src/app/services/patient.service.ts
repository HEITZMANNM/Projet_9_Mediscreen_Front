import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Patient } from '../model/patient';
import { Observable, tap } from 'rxjs';
import { NewPatient } from '../model/newPatient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }

  addNewPatient(patient: NewPatient){

return this.http.post(`http://localhost:8080/patient/add`, patient).pipe(
  tap((response)=> console.table(response)));

  }


  getALlPatients() :Observable<Patient[]>{

    return this.http.get<Patient[]>(`http://localhost:8080/patient/all`).pipe(
      tap((response)=> console.table(response)));
  }

  getPatientById(id:string) :Observable<Patient>{

    return this.http.get<Patient>(`http://localhost:8080/patient/identity?id=${id}`).pipe(
      tap((response)=> console.table(response)));
  }

  upDatePatient(patient: Patient){

    return this.http.post(`http://localhost:8080/patient/upDate`, patient).pipe(
  tap((response)=> console.table(response)));
  }

  deletePatient(id:string){

      const intId = parseInt(id);

    return this.http.delete(`http://localhost:8080/patient/delete?id=${intId}`).pipe(
  tap((response)=> console.table(response)));
  }

    
    
}


