import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChoixItem } from '../Model/ChoixItem.model';
import { User } from '../Model/User.model';

@Injectable({
  providedIn: 'root'
})
export class ChoixService {

 
  choixUrl:string="http://localhost:2223/api"

  constructor(private httpClient:HttpClient) { }

  //********Les services de spring d'entités Choix (Controller)*** */
  
  //------//----- ajouter a user le choix d id suivante  :
  // addToUserChoix(userId:number, idSujet:number): Observable<Object>{
  //   //console.log(user);
  //   return this.httpClient.post(`${this.choixUrl}/users/${userId}/choix/add/${idSujet}`,User);
  //   //zyedt l user mch mt2kda minhaa 
  // }

  //----- view choix de chaque user :
  // getUserChoix(userId:number){ //: Observable<ChoixItem> 
  //   return this.httpClient.get(`${this.choixUrl}/users/${userId}/choix`);
  // }

  // //------- ajouter ou mise a jour le choix d'id user .. :
  // updateChoixItem(userId:number , idSujet:number,choixItem :any): Observable<Object>{
  //   return this.httpClient.put(`${this.choixUrl}/users/${userId}/choux/update/${idSujet}`,choixItem);
  // }

  // //-------------- supprimer le choix de user  :
  // removeFromUserChoix(userId:number , idSujet:number): Observable<Object> {
  //   return this.httpClient.delete(`${this.choixUrl}/users/${userId}/choix/remove/${idSujet}`);
  // }
  
  //------------------------View-------------------------------------------------------------
  
  //lzm njrbhm mch mt1kda minhom fama 7aja lzm nzidha fil observable tit7at dima fil get

   //-- tous le contenue de choix de all users :
   getChoixItems() {  //:Observable
    return this.httpClient.get(`${this.choixUrl}/choix-items`);
   }
   // --- voir le choix de user d 'id user et de sujet d'id idSuj :
   
  //  getChoixItem(userId:number , idSujet:number) { //:Observable
  //   return this.httpClient.get(`${this.choixUrl}/choix-items/${userId}/${idSujet}`);
  //  }

  //---------------------------------------------------------------------
  //KIF NTB3 LFICHIER li 3andi 3amlha string momkn bch ybdlha yconvirtiha b3d
  getChoixItem(userId:string , idSujet:string) :Observable<ChoixItem>{ //:Observable
    return this.httpClient.get<ChoixItem>(`${this.choixUrl}/choix-items/${userId}/${idSujet}`);
   }

   addToUserChoix(userId:string, idSujet:string): Observable<User>{
    //console.log(user);
    return this.httpClient.post<User>(`${this.choixUrl}/users/${userId}/choix/add/${idSujet}`,{
    })
    //zyedt l user mch mt2kda minhaa 
    }

    getUserChoix(userId:string): Observable<ChoixItem[]>{ //: Observable<ChoixItem> 
      return this.httpClient.get<ChoixItem[]>(`${this.choixUrl}/users/${userId}/choix`);
    }


      //------- ajouter ou mise a jour le choix d'id user .. :
    updateChoixItem(userId:String, idSujet:String, quantity : Number): Observable<User>{
      return this.httpClient.put<User>(`${this.choixUrl}/users/${userId}/choix/update/${idSujet}`, {
        quantity
         })
     }
     //-------------- supprimer le choix de user  :
    removeFromUserChoix(userId:string , idSujet:string): Observable<any> {
       return this.httpClient.delete(`${this.choixUrl}/users/${userId}/choix/remove/${idSujet}`);
   }





}
