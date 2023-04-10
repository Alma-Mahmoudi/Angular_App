import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminEditUserComponent } from './Components/admin/admin-edit-user/admin-edit-user.component';
import { AdminListeGroupesComponent } from './Components/admin/admin-liste-groupes/admin-liste-groupes.component';
import { ChoixByidComponent } from './Components/choix-byid/choix-byid.component';
import { ChoixfinaleByidComponent } from './Components/choixfinale-byid/choixfinale-byid.component';
import { ContactComponent } from './Components/contact/contact.component';
import { EtudiantsEnicarComponent } from './Components/etudiants-enicar/etudiants-enicar.component';
import { HomeComponent } from './Components/home/home.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { ResultatModificationComponent } from './Components/Resultat/resultat-modification/resultat-modification.component';
import { ResultatComponent } from './Components/Resultat/resultat/resultat.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { CreateSujetComponent } from './Components/Sujets/create-sujet/create-sujet.component';
import { SujetDetailsComponent } from './Components/Sujets/sujet-details/sujet-details.component';
import { SujetListComponent } from './Components/Sujets/sujet-list/sujet-list.component';
import { UpdateSujetComponent } from './Components/Sujets/update-sujet/update-sujet.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SujetGuard } from './guard/sujet.guard';


const routes: Routes = [
  {path:'sign-up', component:SignUpComponent},
  {path:'login', component:LogInComponent},
  {path:'home', component:HomeComponent},
  {path: '',redirectTo: 'login',pathMatch:'full'}, //3ibara page home yp9a yrj3lha dima

  {path:'sujets',component:SujetListComponent},
  {path: 'create-sujet' , component: CreateSujetComponent,canActivate:[SujetGuard]},
  {path: 'update-sujet/:idSujet' , component: UpdateSujetComponent},
  {path: 'sujet-details/:idSujet', component : SujetDetailsComponent},

  {path:'admin-groupes',component:AdminListeGroupesComponent},
  {path:'edit-user/:id',component:AdminEditUserComponent},
 


  {path: 'forbidden', component:ForbiddenComponent},

  
  {path: 'choix-user/:userId', component:ChoixByidComponent},
  {path: 'choixfinale-user/:userId', component:ChoixfinaleByidComponent},

  {path:'contact', component:ContactComponent},

  {path:'liste-etudiantEnicar', component:EtudiantsEnicarComponent} ,

  {path:'resultat', component:ResultatComponent} ,
  {path:'modifier-resultat', component:ResultatModificationComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
