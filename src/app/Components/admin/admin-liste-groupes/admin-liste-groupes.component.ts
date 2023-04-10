import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/Model/User.model';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-admin-liste-groupes',
  templateUrl: './admin-liste-groupes.component.html',
  styleUrls: ['./admin-liste-groupes.component.css']
})
export class AdminListeGroupesComponent implements OnInit {

  users!:User[] ;

  //users:any;
  user:any;

  constructor(private userService: UserService,private route:Router) { }

  ngOnInit():void {
   this.user= JSON.parse(localStorage.getItem("user") )
  
   this.userService.getAlluserlist().subscribe(data=>{
     this.users=data;
     
    // let t:any=[]
    // t=data
    // this.list=t.filter((e: { role: string; })=>e.role=='groupe')
   });
  }
  edit(userId:any){
    this.route.navigate([`edit-user/${userId}`])    
  }
  
  
  
  
  private getUser(){
    this.userService.getAlluserlist().subscribe(data => {
      this.users=data;
    });
  }
  
  delete(userId:any){
    console.log(userId);
    this.userService.deleteUser(userId).subscribe(data =>{
        alert("delete succefully ce Groupe de la liste de gorupe");
        console.log(data) 
        this.getUser(); 
      } );
      // this.userService.getAlluserlist().subscribe(data=>{
      //   let t:any=[]
      //   t=data
      //   this.users=t.filter((e: { role: string; })=>e.role='groupe')
      // })
      
    }

    //export pdf qui contient des données des utilisateurs 
    exportUsersPdf(){
      this.userService.exportPdfUsers().subscribe(x =>{
         const blob = new Blob( [x],{type:'application/pdf'});
           
         
         const data =window.URL.createObjectURL(blob);
         const link =document.createElement('a');
         link.href=data ;
         link.download='Users.pdf';
         link.dispatchEvent(new MouseEvent('click',
         {bubbles:true ,cancelable:true, view:window })); 

         setTimeout(function(){
           window.URL.revokeObjectURL(data);
           link.remove();
         },100);
      
        });
    }


}

/*
ngOnInit(): void {this.getSujet(); 

  this.user= JSON.parse(localStorage.getItem("user") || 'null')     
  console.log(this.sujets);
}

private getSujet(){
  this.sujetService.getAllSujets().subscribe(data => {
    this.sujets=data;
  });
}*/