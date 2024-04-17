import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from '../../../interfaces/alumno';
import { AlumnoService } from '../../../services/alumno/alumno.service';

@Component({
  selector: 'app-add-edit-alumno',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-edit-alumno.component.html',
  styleUrl: './add-edit-alumno.component.css'
})
export class AddEditAlumnoComponent {
  form: FormGroup;
  id: number;
  operacion: string = 'Agregar ';
  constructor
    (private router: Router,
      private fb: FormBuilder,
      private _alumnoService: AlumnoService,
      private aRouter: ActivatedRoute
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

  ngOnInit(): void {
    if (this.id != 0) {
      // Edit
      this.operacion = 'Editar ';
      this.getAlumno(this.id);
    }
  }


  addAlumno() {
    const alumno: Alumno = {
      alumno_primerApellido: this.form.value.alumno_primerApellido,
      alumno_segundoApellido: this.form.value.alumno_segundoApellido,
      alumno_nombres: this.form.value.alumno_nombres,
      alumno_dni: this.form.value.alumno_dni,
      alumno_codigo: this.form.value.alumno_codigo,
      alumno_telefono: this.form.value.alumno_telefono,
      alumno_correoElectronico: this.form.value.alumno_correoElectronico,
      estado_id: 0,
      alumno_fechaNacimiento: new Date(this.form.value.alumno_fechaNacimiento),
      eap_id: 0
    }

    if (this.id !== 0) {
      //editar
      alumno.alumno_id = this.id;
      this._alumnoService.updateAlumno(this.id, alumno).subscribe(() => {
        console.log('Alumno actualizado');
        this.router.navigate(['/']);
      })
    } else {
      //agregar
      this._alumnoService.saveAlumno(alumno).subscribe(() => {
        console.log('Alumno agregado');
        this.router.navigate(['/alumnos']);
      })

    };
  }
  getAlumno(id: Number) {
    this._alumnoService.getAlumno(id).subscribe((data: Alumno) => {
      console.log(data);
      this.form.setValue({
        alumno_primerApellido: data.alumno_primerApellido,
        alumno_segundoApellido: data.alumno_segundoApellido,
        alumno_nombres: data.alumno_nombres,
        alumno_dni: data.alumno_dni,
        alumno_codigo: data.alumno_codigo,
        alumno_telefono: data.alumno_telefono,
        alumno_correoElectronico: data.alumno_correoElectronico,
        estado_id: data.estado_id,
        alumno_fechaNacimiento: data.alumno_fechaNacimiento,
        eap_id: data.eap_id
      })
    })
  }
}

