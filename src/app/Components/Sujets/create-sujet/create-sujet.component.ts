import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sujet } from 'src/app/Model/Sujet.model';
import { SujetService } from 'src/app/Services/sujet.service';

@Component({
  selector: 'app-create-sujet',
  templateUrl: './create-sujet.component.html',
  styleUrls: ['./create-sujet.component.css']
})
export class CreateSujetComponent implements OnInit {

  sujet : Sujet= new Sujet();
  constructor(private sujetService: SujetService,
    private router :Router) { }
  
  ngOnInit(): void {}
   
  saveSujet(){
    this.sujetService.addSujet(this.sujet).subscribe( data => {
      console.log(data);
      this.goToSujetList();
    },
    error => console.log(error) ) ; 
  }
  goToSujetList(){
    this.router.navigate(['/sujets']);
  }

  onSubmit() {
    console.log(this.sujet);
    this.saveSujet() ;

  }

}
