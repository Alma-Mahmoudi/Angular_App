import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any ;

  constructor(public authService: AuthService,
    private router : Router) { }

  ngOnInit(): void {
    this.user= JSON.parse(localStorage.getItem("user"));
    
  }

  add(){
    this.router.navigate(['create-sujet']);
  }


  listeSujet(){
    this.router.navigate(['sujets']);
  }
  creationSujet(){
    this.router.navigate(['create-sujet']);
  }

  remplirChoix(){
    this.router.navigate(['remplir-choix']);
  }

  Choix(userId:number){
    this.router.navigate(['choix-user',userId]);

  }

  choixfinale(userId:number){
    this.router.navigate(['choixfinale-user',userId]);
  }

//-------------------pour ADMIN---- : 
  goToListGroupe(){
    this.router.navigate(['admin-groupes']);
  }

  //---------resultat finale 
  resultats(){
    this.router.navigate(['resultat']);
  }
  modifierResultats(){
    this.router.navigate(['modifier-resultat']);
  }


}
