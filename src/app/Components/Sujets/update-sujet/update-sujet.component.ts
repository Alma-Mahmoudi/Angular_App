import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sujet } from 'src/app/Model/Sujet.model';
import { SujetService } from 'src/app/Services/sujet.service';

@Component({
  selector: 'app-update-sujet',
  templateUrl: './update-sujet.component.html',
  styleUrls: ['./update-sujet.component.css']
})
export class UpdateSujetComponent implements OnInit {

  idSujet :number ;
  sujet : Sujet =new Sujet() ; ;  
  
  constructor(private sujetService :SujetService,
    private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.idSujet=this.route.snapshot.params['idSujet'];

    this.sujetService.getById(this.idSujet).subscribe(data => {
      console.log(data);
      this.sujet= data ;
    }, error => console.log(error) );
  }

  updateSujet() {
    this.sujetService.updateSujet(this.idSujet , this.sujet)
    .subscribe(data => {
        console.log(data);
        //this.sujet=new Sujet() ;
        this.goToSujetList();
      }, error => console.log(error));
 }

  onSubmit() {
   this.updateSujet(); 

 }
 goToSujetList(){
  this.router.navigate(['/sujets']);
}


}
