import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LogInComponent } from './Components/log-in/log-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { HomeComponent } from './Components/home/home.component';
import { CreateSujetComponent } from './Components/Sujets/create-sujet/create-sujet.component';
import { SujetDetailsComponent } from './Components/Sujets/sujet-details/sujet-details.component';
import { SujetListComponent } from './Components/Sujets/sujet-list/sujet-list.component';
import { UpdateSujetComponent } from './Components/Sujets/update-sujet/update-sujet.component';
import { AdminListeGroupesComponent } from './Components/admin/admin-liste-groupes/admin-liste-groupes.component';
import { AdminEditUserComponent } from './Components/admin/admin-edit-user/admin-edit-user.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ChoixByidComponent } from './Components/choix-byid/choix-byid.component';
import { ContactComponent } from './Components/contact/contact.component';
import { EtudiantsEnicarComponent } from './Components/etudiants-enicar/etudiants-enicar.component';
import { ChoixfinaleByidComponent } from './Components/choixfinale-byid/choixfinale-byid.component';
import { ResultatModificationComponent } from './Components/Resultat/resultat-modification/resultat-modification.component';
import { ResultatComponent } from './Components/Resultat/resultat/resultat.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    HomeComponent,
    CreateSujetComponent,
    SujetDetailsComponent,
    SujetListComponent,
    UpdateSujetComponent,
    AdminListeGroupesComponent,
    AdminEditUserComponent,
    ForbiddenComponent,
    ChoixByidComponent,
    ContactComponent,
    EtudiantsEnicarComponent,
    ChoixfinaleByidComponent,
    ResultatComponent,
    ResultatModificationComponent
  ],
  imports: [
    BrowserModule, //ngIf ngFor se trouve ici 
    AppRoutingModule,
    FormsModule, //ngModule : utilité: two way databinding
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
