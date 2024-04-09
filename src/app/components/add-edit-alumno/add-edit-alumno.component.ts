import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

import { Router } from '@angular/router';
import { Alumno } from '../../interfaces/alumno';

@Component({
  selector: 'app-add-edit-alumno',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-edit-alumno.component.html',
  styleUrl: './add-edit-alumno.component.css'
})
export class AddEditAlumnoComponent {
  form: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      alumno_primerApellido: ['', Validators.required],
      alumno_segundoApellido: ['', Validators.required],
      alumno_nombres: ['', Validators.required],
      alumno_dni: ['', Validators.required],
      alumno_codigo: ['', Validators.required],
      alumno_telefono: ['', Validators.required],
      alumno_correoElectronico: ['', Validators.required],

    });
  }
  cancel() {
    this.router.navigate(['/']);
  }

  addProduct() {
    const alumno: Alumno = {
      alumno_primerApellido: this.form.value.alumno_primerApellido,
      alumno_segundoApellido: this.form.value.alumno_segundoApellido,
      alumno_nombres: this.form.value.alumno_nombres,
      alumno_dni: this.form.value.alumno_dni,
      alumno_codigo: this.form.value.alumno_codigo,
      alumno_telefono: this.form.value.alumno_telefono,
      alumno_correoElectronico: this.form.value.alumno_correoElectronico,
      estado_id: 0,
      alumno_fechaNacimiento: new Date("2000-01-01"),
      eap_id: 0
    }
    console.log(alumno);
  }
}

