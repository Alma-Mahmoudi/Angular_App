import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChoixItem } from 'src/app/Model/ChoixItem.model';
import { Etudiant } from 'src/app/Model/Etudiant.model';
import { Sujet } from 'src/app/Model/Sujet.model';
import { User } from 'src/app/Model/User.model';
import { ChoixService } from 'src/app/Services/choix.service';
import { EtudiantService } from 'src/app/Services/etudiant.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-choix-byid',
  templateUrl: './choix-byid.component.html',
  styleUrls: ['./choix-byid.component.css']
})
export class ChoixByidComponent implements OnInit {


  user:any ;
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


  ajouterSujet() {
    this.router.navigate(['sujets']);
  }

  Delete(idSujet:any){
       this.choixservice.removeFromUserChoix(this.user.userId.toString(),idSujet.toString() ).subscribe( data=> {
              alert("delete succefully ");
              console.log(data)
              this.getItems();
       })
  }



//   removeFromUserChoix(userId:string , idSujet:string): Observable<any> {
//     return this.httpClient.delete(`${this.choixUrl}/users/${userId}/choix/remove/${idSujet}`);
// }

  // deleteSujet(idSujet : number) {
  //   this.sujetService.deleteSujet(idSujet).subscribe(data =>{
  //     alert("delete succefully la sujet d id:");
  //     console.log(data) 
  //     this.getSujet(); 
  
  //   }) 

  //----------------Choix des etudiants :  ------------------------------------------------------------------------
    public firstselected:number;
   secondselected:number;
   thirdselected:number;
   fourthselected:number;

   Etudiant1:string;
   Etudiant2:string;
   Etudiant3:string;
   Etudiant4:string;
  
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
