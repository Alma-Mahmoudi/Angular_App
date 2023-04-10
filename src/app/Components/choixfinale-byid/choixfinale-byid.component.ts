import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChoixItem } from 'src/app/Model/ChoixItem.model';
import { Etudiant } from 'src/app/Model/Etudiant.model';
import { Sujet } from 'src/app/Model/Sujet.model';
import { ChoixService } from 'src/app/Services/choix.service';
import { EtudiantService } from 'src/app/Services/etudiant.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-choixfinale-byid',
  templateUrl: './choixfinale-byid.component.html',
  styleUrls: ['./choixfinale-byid.component.css']
})
export class ChoixfinaleByidComponent implements OnInit {

  
  user:any ;
  etudiants :Etudiant[];

  sujet :Sujet;

  choixItems : ChoixItem[]

  constructor(private router : Router,
    private userservice : UserService,
    private choixservice : ChoixService,
    private studentService: EtudiantService ) { }

  ngOnInit(): void {
    this.user= JSON.parse(localStorage.getItem("user"));
    this.getItems();

    console.log("hello");
    console.log("this is user :"+this.user.userId);
  
    this.getStudents();
  }


  getItems () {
    this.choixservice.getUserChoix(this.user.userId.toString()).subscribe((choixItems: ChoixItem[]) => {
      this.choixItems = choixItems
    })
  }

//----etudiants 
students: Etudiant[];
//constructor(private studentService: EtudiantService) { }


  private getStudents(){
    this.studentService.getStudentsList().subscribe(data =>{
      this.students = data;});
  }



valider(userId:number){
  this.router.navigate(['choixfinale-user',userId]);

}

  
}
