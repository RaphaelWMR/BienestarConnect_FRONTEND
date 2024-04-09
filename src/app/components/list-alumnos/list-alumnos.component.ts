
import { Component } from '@angular/core';
import { Alumno } from '../../interfaces/alumno';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlumnoService } from '../../services/alumno.service';


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
    this.router.navigate(['/add']);
  }
  updateAlumno(id: number) {
    this.router.navigate(['/edit', id]);
  }

  getListAlumnos() {
    this._alumnoService.getListAlumnos().subscribe((data) => {
      this.listAlumnos = data;
    })
  }
}