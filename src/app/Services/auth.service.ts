import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from '../Model/role.model';
import { User } from '../Model/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   //userlist:any=users

   public loggedUser!:string;
   public isloggedIn: Boolean = false;
   public roles:Role[];

   //url de Spring 
   userUrl:string="http://localhost:2223/api/users"

   apiURL:string='http://localhost:2223/api/users/login'

   constructor(private router: Router,
    private httpClient:HttpClient) { }
 
   //****** Gerer les Services de spring : */

   //------- LogIn --- :
   login(user:User){   //user kent any : user:any 
      this.loggedUser = user.email;
      this.isloggedIn = true;
      this.roles = user.roles;
      localStorage.setItem('loggedUser',this.loggedUser);
      localStorage.setItem('isloggedIn',String(this.isloggedIn));
     return this.httpClient.get(`${this.userUrl}/info/${user.email}/${user.password}`)
   }
   
   loggedIn(){
     return !!localStorage.getItem('JWT');
    // this.roles = undefined;
   }
  
///-Role :--------------------------------
  isAdmin():Boolean{
  // console.log("roles "+ this.roles);
   let admin: Boolean = false;
   if (!this.roles) //this.roles== undefiened
        return false;
        console.log("undefined -");
   this.roles.forEach((curRole) => {
         if(curRole.role == 'ADMIN') {
                  admin = true;
                  console.log("role :"+ curRole.role +" => user is admin");
                  console.log("-----------");
         }
     });
   return admin;
   }

   
  //  getUserFromDB(username:string):Observable<User>
  //  {
  //  const url = `${this.apiURL}/${username}`;
  //  return this.httpClient.get<User>(url);
  //  //return this.http.get<User>(`${this.apiURL}/${username}`);
   
  //  }
   
  //  setLoggedUserFromLocalStorage(login : string) {
  //      this.loggedUser = login;
  //      this.isloggedIn = true;
  //      this.getUserRoles(login);
  //   }

   
  //   getUserRoles(username :string){
  //   this.getUserFromDB(username).subscribe((user: User)=>{
  //     this.roles = user.roles;
  //     });
  //   }



//------------------------------------------------------------


   logOut(){
    console.log("logout");
    
    this.isloggedIn= false;
    this.roles = undefined;

    localStorage.clear()
    this.router.navigate(["login"])
  
  }



}
