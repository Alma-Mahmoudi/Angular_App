import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sujet } from 'src/app/Model/Sujet.model';
import { AuthService } from 'src/app/Services/auth.service';
import { ChoixService } from 'src/app/Services/choix.service';
import { SujetService } from 'src/app/Services/sujet.service';

@Component({
  selector: 'app-sujet-list',
  templateUrl: './sujet-list.component.html',
  styleUrls: ['./sujet-list.component.css']
})
export class SujetListComponent implements OnInit {

//@Input() sujets :Sujet[] | undefined;
  //@Input() sujets: any;

  sujets!: Sujet[]; //on a cree un class Sujet qui contient tous les attributs

  searchText:any ; 
  MaListeDesSujetsService: any;

  add :number= -1;
  user:any;



  constructor(private sujetService : SujetService,private choixservice: ChoixService,
    private router: Router,
    public authService : AuthService ) { }

  ngOnInit(): void {this.getSujet(); 

    this.user= JSON.parse(localStorage.getItem("user") ); 
    console.log(this.sujets);
  }

  private getSujet(){
    this.sujetService.getAllSujets().subscribe(data => {
      this.sujets=data;
    });
  }

  sujetDetails(idSujet :number){
    this.router.navigate(['sujet-details',idSujet]);
  }

  updateSujet(idSujet :number) {
      this.router.navigate(['update-sujet', idSujet]);
  }
  deleteSujet(idSujet : number) {
    this.sujetService.deleteSujet(idSujet).subscribe(data =>{
      alert("delete succefully la sujet d id:"+ idSujet);
      console.log(data) 
      this.getSujet(); 
  
    }) 

  }

 // -------pour le pdf qui contient tous les sujets 
  exportUsersPdf1(){
    this.sujetService.exportPdfSujets().subscribe(x =>{
      const blob = new Blob( [x],{type:'application/pdf'});
        
      
      const data =window.URL.createObjectURL(blob);
      const link =document.createElement('a');
      link.href=data ;
      link.download='Sujets.pdf';
      link.dispatchEvent(new MouseEvent('click',
      {bubbles:true ,cancelable:true, view:window })); 

      setTimeout(function(){
        window.URL.revokeObjectURL(data);
        link.remove();
      },100);
   
     });
    }

  }









////////////////////////////Test---------------------------------------------------------------------------------
  // addToMyList(index:number){
  //     this.add= +index
  // }
  // add1(amount :number){
  //   let selectedSujet =this.sujets[this.add]
  //   let data = {
  //     idsujet : selectedSujet.idSujet,
  //     titre : selectedSujet.titre ,
  //     amount :+amount ,
  //     description : selectedSujet.description,
  //     encadrant : selectedSujet.encadrant 
  //   }
  // }

  // inscrire(){
  //   this.sujetService.inscri(this.sujets,this.user.id).subscribe(data=> console.log(data));
  //   console.log("====> Id user:"+this.user.id);
  //   console.log(this.sujets);
  //   //alert("bravo");
 
  //  }


  //---------------------------------------------------------------------addd Sujet ------------------------------------------------------------------
  /*inscrire(){
    this.choixservice.inscri(this.sujets,46).subscribe(data=> console.log(data));
    console.log("====> Id user:"+this.user.id);
    console.log(this.sujets);
    //alert("bravo");
 
   }*/

   //----------------------------------------



