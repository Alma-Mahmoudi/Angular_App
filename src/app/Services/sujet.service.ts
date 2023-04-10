import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sujet } from '../Model/Sujet.model';

@Injectable({
  providedIn: 'root'
})
export class SujetService {
  //Url de Spring Boot 
  sujetUrl:string="http://localhost:2223/api/sujets"

  //private apiServerUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }

  //***** gerer les ervices de Spring Boot ****** : 
  //-------- get all Sujets : 
  getAllSujets(): Observable<Sujet[]>{
    return this.httpClient.get<Sujet[]>(`${this.sujetUrl}`);
  }
  //-------- get Sujet by id : 
  getById(idSujet:number): Observable<Sujet>{
    return this.httpClient.get<Sujet>(`${this.sujetUrl}/${idSujet}`)
  }
  //-------- add Sujet ( creer un sujet ) :
  addSujet(sujet : Sujet): Observable<Object> {
    return this.httpClient.post(`${this.sujetUrl}`,sujet);
  }
  //-------- Update sujet (Mise a jour un sujet):
  updateSujet(idSujet:number, sujet: Sujet): Observable<Object>{
    return this.httpClient.put(`${this.sujetUrl}/${idSujet}`,sujet);
  }
  //-------- Delete Sujet (Suppression ): 
  deleteSujet(idSujet : number): Observable<Object> {
    return this.httpClient.delete(`${this.sujetUrl}/${idSujet}`);
  }

  //--------pour le fichier pdf qui contient tous les usjets :
  exportPdfSujets(): Observable<Blob> {
    return this.httpClient.get(`${this.sujetUrl}/export/pdf`, {responseType: 'blob' });
  }

}
 //--------------------------------------------------------------------------------
  /*getAllSujets(){
    return this.httpClient.get(this.sujetUrl);
  }*/
 
 /* deleteSujet(id:any){
   return this.httpClient.delete(`${this.sujetUrl}/${id}`)

  }*/

/*
  getById(id:any){
  return this.httpClient.get(`${this.sujetUrl}/${id}`)
}*/
  /*inscri(sujets:any,id:any){
    return this.httpClient.put(`${this.sujetUrl}/abon/${id}`,SujetService);
  }*/
/*
 public getSujets(): Observable<Sujet[]> {
   return this.httpClient.get<Sujet[]>(`${this.apiServerUrl}/api/sujets`);
 }
*/

