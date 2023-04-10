import { Etudiant } from "./Etudiant.model";
import { Role } from "./role.model";

export class User {
    // static username(username: any) {
    //   throw new Error('Method not implemented.');
    // }
    userId : Number ; 
    username: string ; 
    email:string ; 
    password: string ;
    specialite : String ;
    roles :Role[] ;
    etudiant:Etudiant[];
    choixItems : [any] //ajouter dans spring ?
}