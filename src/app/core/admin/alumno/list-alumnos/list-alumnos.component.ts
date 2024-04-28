
import { Component, NgModule } from '@angular/core';
import { Alumno } from '../../../../shared/apis/api-fisibienestar/interfaces/alumno';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlumnoService } from '../../../../shared/apis/api-fisibienestar/services/alumno/alumno.service';
@Component({
  selector: 'app-list-alumnos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-alumnos.component.html',
  styleUrl: './list-alumnos.component.css'
})
export class ListAlumnosComponent {
  listAlumnos: Alumno[] = [

  ]
  constructor(private router: Router, private _alumnoService: AlumnoService) {

  }
  ngOnInit(): void {
    this.getListAlumnos();
  }

  addAlumno() {
    this.router.navigate(['/alumnos/add']);
  }
  updateAlumno(id: number) {
    this.router.navigate(['/alumnos/edit', id]);
  }

  getListAlumnos() {
    this._alumnoService.getListAlumnos().subscribe((data: Alumno[]) => {
      this.listAlumnos = data;
    });
  }

  deleteAlumno(id: number) {
    this._alumnoService.deleteAlumno(id).subscribe(() => {
      this.getListAlumnos();
    })
  }
}