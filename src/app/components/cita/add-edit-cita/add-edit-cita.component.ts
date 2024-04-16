import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ListAlumnosComponent } from '../../alumno/list-alumnos/list-alumnos.component';
import { AlumnoService } from '../../../services/alumno/alumno.service';
import { Alumno } from '../../../interfaces/alumno';

@Component({
  selector: 'app-add-edit-cita',
  templateUrl: './add-edit-cita.component.html',
  styleUrl: './add-edit-cita.component.css'
})
export class AddEditCitaComponent {
  form: FormGroup;
  id: number;
  operacion: string = 'Nueva ';
  listAlumnos: Alumno[] = [];
  constructor(
    private fb: FormBuilder,
    private aRouter: ActivatedRoute,
    private _alumnoService: AlumnoService
  ) {
    this.form = this.fb.group({
      alumno_primerApellido: ['', Validators.required],
      alumno_segundoApellido: ['', Validators.required],
      alumno_nombres: ['', Validators.required],
      alumno_dni: ['', Validators.required],
      alumno_codigo: ['', Validators.required],
      alumno_telefono: ['', Validators.required],
      alumno_correoElectronico: ['', Validators.required],

    });
    this.id = Number(aRouter.snapshot.paramMap.get('id'));

  }

  getListAlumnos() {
    this._alumnoService.getListAlumnos().subscribe((data: Alumno[]) => {
      this.listAlumnos = data;
    });
  }

  addCita() {

  }
  cancel() {

  }
}
