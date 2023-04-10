import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User.model';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  erreur =0;
  
  loginForm: FormGroup;
  
 // user = new User() ; 
  //user:any={}
  user = new User() ; 

  msg:string ;
  token:string ;

  constructor(private formBuilder:FormBuilder, private authService:AuthService,private route:Router) { }

  ngOnInit() {
  this.loginForm=this.formBuilder.group({
        email:[''],
        password:['']
    })
    
  }
  onSubmit(){
    console.log('info',this.user);
    let p:any;
    this.authService.login(this.user).subscribe((data)=>{
      p=data
      if (p) {
        localStorage.setItem("user",JSON.stringify(p))
        localStorage.setItem("JWT","token")
        alert("Login Successfully Welcome ");
        console.log(this.user.email ) ;
        this.route.navigate(["home"])  
      }
      else{
         console.log(data);
         //alert("wrong information")
          this.erreur = 1;
      } 
    })  
  }

  CreateAccount(){
    this.route.navigate(['sign-up']);
  }

}
