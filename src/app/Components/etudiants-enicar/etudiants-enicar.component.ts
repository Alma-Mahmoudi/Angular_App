import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/Model/Etudiant.model';
import { EtudiantService } from 'src/app/Services/etudiant.service';

@Component({
  selector: 'app-etudiants-enicar',
  templateUrl: './etudiants-enicar.component.html',
  styleUrls: ['./etudiants-enicar.component.css']
})
export class EtudiantsEnicarComponent implements OnInit {

  
  
  students: Etudiant[];
  constructor(private studentService: EtudiantService) { }

  ngOnInit(): void {
    this.getStudents();
  }
private getStudents(){
  this.studentService.getStudentsList().subscribe(data =>{
    this.students = data;});
}

}
