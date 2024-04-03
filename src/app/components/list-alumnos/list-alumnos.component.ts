import { Component } from '@angular/core';
import { Alumno } from '../../interfaces/alumno';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlumnoService } from '../../services/alumno.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-list-alumnos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-alumnos.component.html',
  styleUrl: './list-alumnos.component.css'
})
export class ListAlumnosComponent {
  listAlumnos: Alumno[] = [
    {
      alumno_id: 1,
      alumno_primerApellido: 'Matos',
      alumno_segundoApellido: 'Ramos',
      alumno_nombres: 'Wilfredo Raphael',
      alumno_dni: '71088890',
      alumno_codigo: '18200159',
      alumno_telefono: '989948986',
      alumno_correoElectronico: 'wilfredo.matos@unmsm.edu.pe',
      estado_id: 0,
      alumno_fechaNacimiento: new Date('2000-09-23'),
      eap_id: 1
    },
    {
      alumno_id: 2,
      alumno_primerApellido: 'Escalante',
      alumno_segundoApellido: 'Flores',
      alumno_nombres: 'Eduardo',
      alumno_dni: '25454752',
      alumno_codigo: '18200147',
      alumno_telefono: '9985464456',
      alumno_correoElectronico: 'eduardo.escalante1@unmsm.edu.pe',
      estado_id: 0,
      alumno_fechaNacimiento: new Date('1995-08-15'),
      eap_id: 1
    }
  ]
  constructor(private router: Router/*, private alumnoService: AlumnoService*/) {

  }
  ngOnInit(): void {

  }

  addAlumno() {
    this.router.navigate(['/add']);
  }
  updateAlumno(id: number) {
    this.router.navigate(['/edit', id]);
  }
  /*
    getListAlumnos() {
      this._alumnoService.getListAlumnos().subscribe((data) => {
        console.log(data);
      })
    }*/
}
