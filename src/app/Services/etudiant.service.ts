import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../Model/Etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  apiURL: string = 'http://localhost:2223/web/etudiant';
  constructor(private http: HttpClient) { }

  //--get student from Excel 
  getStudentsList(): Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.apiURL);
  }

  // importFromExcel() {
  //   return this.http.get(`${this.apiURL}/etudiant/import/excel`);

  // }





}
