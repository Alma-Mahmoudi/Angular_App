import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sujet } from 'src/app/Model/Sujet.model';
import { ChoixService } from 'src/app/Services/choix.service';
import { SujetService } from 'src/app/Services/sujet.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-sujet-details',
  templateUrl: './sujet-details.component.html',
  styleUrls: ['./sujet-details.component.css']
})
export class SujetDetailsComponent implements OnInit {

  idSujet : number ; 
  sujet: Sujet ;
  
  user:any;
 
  public isSujetInChoix : boolean
  //public sujet : Sujet ;

  
  
  constructor(private route:ActivatedRoute,
     private sujetService: SujetService,
     private userService : UserService,
     private choixservice : ChoixService) { }

  ngOnInit(): void {
    this.idSujet=this.route.snapshot.params['idSujet'];

    this.sujet= new Sujet();
    this.sujetService.getById(this.idSujet).subscribe( data => {
      
      this.sujet=data ;
      console.log(this.sujet);

    });
    this.user= JSON.parse(localStorage.getItem("user") || 'null') ;     
  } 

///--------------------add to mon Choix ------------------------------------------------------------------------

      addToCart(){
            this.choixservice.addToUserChoix(this.user.userId.toString(),
            this.sujet.idSujet.toString()).subscribe(res =>{
                this.getChoixItem() 
                console.log("Added successfully")
                alert("Added successfully")
            })
      }
      getChoixItem () {
          this.choixservice.getChoixItem(this.user.userId.toString(), this.sujet.idSujet.toString()).subscribe(res => {
              this.isSujetInChoix = true
          }, (error : ErrorEvent) => {
              this.isSujetInChoix = false
          })
    }

}
