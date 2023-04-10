import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetPFA-versionF1';


  constructor(public authService: AuthService,
    private router:Router) { }

  //Log out and Clear 
  onlogOut(){ this.authService.logOut(); }


}
