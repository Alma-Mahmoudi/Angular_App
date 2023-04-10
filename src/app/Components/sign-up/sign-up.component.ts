import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { MustMatch } from 'src/app/Validators/MustMatch';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  Spec: any = ['infotronique','Mecatronique','Gsil','informatique'];

  signUp: FormGroup;
 //signUp : FormGroup;
 constructor( private formBuilder: FormBuilder,
              private userService:UserService,
              private router :Router) { }

 ngOnInit() {

   this.signUp=this.formBuilder.group({
     username:['',[Validators.minLength(8),Validators.required]],
     email:['',[Validators.email,Validators.required]],
     specialite:['',[Validators.maxLength(10),Validators.required]],
     password:['',[Validators.minLength(8),Validators.required]],
     pwd:['',[Validators.required,Validators.minLength(8)]],
     role:['']
   },
   {
     validator:MustMatch('password','pwd')
   }
   )
   
 }
sign(){
 console.log('user',this.signUp.value);
 this.userService.addUser((this.signUp.value)).subscribe(data=>{
      console.log(data) 
      alert("successful registration of Groupe");
      this.router.navigate(['/login']);
      },error => console.log(error) ) ; 

  //this.userService.saveRole("USER").subscribe() ; 
  //n7b kol ma n3ml registratio n3ml service y addi role = "USER" nfs lconcept mt3 choix

 }
 

goToLogIn(){
 this.router.navigate(['/login']);
}


}
