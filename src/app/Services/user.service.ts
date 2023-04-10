import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../Model/role.model';
import { User } from '../Model/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
//Url de Spring Boot 
private UserUrl="http://localhost:2223/api/users";

constructor(private httpClient:HttpClient) { }

//---- get all users :
getAlluserlist(): Observable<User[]> {
  return this.httpClient.get<User[]>(`${this.UserUrl}`)
}
//---- get user by id
getById(userId:any){
  return this.httpClient.get(`${this.UserUrl}/${userId}`)
}

//---- save user (create user : Register ) :
addUser(user:any){
  console.log(user);
  return this.httpClient.post(`${this.UserUrl}`,user);
}

//---- update user by id :
updateUser(userId:number, user:any){
  console.log(user);
  return this.httpClient.put(`${this.UserUrl}/${userId}`,user)  
}

deleteUser(userId:number): Observable<Object>{
   return this.httpClient.delete(`${this.UserUrl}/${userId}`)
}

getAllGroupes(){
  return [];
}

//-----------------------Role--------------------
//j'ajoute le role de groupe de nom "USER" lorsque je fais le Sigun automatiquement
saveRole(role:string){
  //console.log(role);
  return this.httpClient.post(`${this.UserUrl}/role/save`,role);
}
addRoleToUser(role:any){
  return this.httpClient.put(`${this.UserUrl}/role/addtouser`,role)   
}

//--PDF contient tous le contunue des utilisateurs pour l'admin------
exportPdfUsers(): Observable<Blob> {
  return this.httpClient.get(`${this.UserUrl}/export/pdf`, {responseType: 'blob' });
}




}
