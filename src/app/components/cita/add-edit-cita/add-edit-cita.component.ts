import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ListAlumnosComponent } from '../../alumno/list-alumnos/list-alumnos.component';
import { AlumnoService } from '../../../services/alumno/alumno.service';
import { Alumno } from '../../../interfaces/alumno';
import { CitaModalidad } from '../../../interfaces/cita-modalidad';
import { CitaModalidadService } from '../../../services/cita/cita-modalidad.service';
import { CitaConfirmacionService } from '../../../services/cita/cita-confirmacion.service';
import { CitaTipoService } from '../../../services/cita/cita-tipo.service';
import { CitaConfirmacion } from '../../../interfaces/cita-confirmacion';
import { CitaTipo } from '../../../interfaces/cita-tipo';
import { Cita } from '../../../interfaces/cita';
import { CitaService } from '../../../services/cita/cita.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { link } from 'fs';

@Component({
  selector: 'app-add-edit-cita',
  templateUrl: './add-edit-cita.component.html',
  styleUrl: './add-edit-cita.component.css'
})
export class AddEditCitaComponent {
  form: FormGroup;
  id: number;
  operacion: string = 'Nueva ';
  // Listas
  listAlumnos: Alumno[] = [];
  listModalidades: CitaModalidad[] = [];
  listConfirmacion: CitaConfirmacion[] = [];
  listTipo: CitaTipo[] = [];
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private aRouter: ActivatedRoute,
    private _alumnoService: AlumnoService,
    private _citaService: CitaService,
    private _modalidadService: CitaModalidadService,
    private _confirmacionService: CitaConfirmacionService,
    private _tipoService: CitaTipoService
  ) {
    this.form = this.fb.group({
      alumno_id: ['', Validators.required],
      cita_fecha: ['', Validators.required],
      cita_hora: ['', Validators.required],
      cita_descripcion: ['', Validators.required],
      citamodalidad_id: ['', Validators.required],
      citatipo_id: ['', Validators.required],
      citaconfirmacion_id: ['', Validators.required],
    });
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    if (this.id != 0) {
      // Edit
      this.operacion = 'Editar ';
      this.getCita(this.id);
    }
    this.getListAlumnos();
    this.getListModalidades();
    this.getListTipos();
  }
  getListAlumnos() {
    this._alumnoService.getListAlumnos().subscribe((data: Alumno[]) => {
      this.listAlumnos = data;
    });
  }

  getListModalidades() {
    this._modalidadService.getListModalidad().subscribe((data: CitaModalidad[]) => {
      this.listModalidades = data;
      console.log(data);
    });
  }

  getListTipos() {
    this._tipoService.getListTipo().subscribe((data: CitaTipo[]) => {
      this.listTipo = data;
      console.log(data);
    });
  }

  addCita() {
    const cita: Cita = {
      alumno_id: this.form.value.alumno_id,
      cita_fecha: this.form.value.cita_fecha,
      cita_hora: this.form.value.cita_hora,
      cita_descripcion: this.form.value.cita_descripcion,
      citaModalidad_id: this.form.value.citamodalidad_id,
      citaTipo_id: this.form.value.citatipo_id,
      citaconfirmacion_id: 1
    }
    console.log(cita);
    if (this.id !== 0) {
      //editar
      cita.cita_id = this.id;
      this._citaService.updateCita(this.id, cita).subscribe(() => {
        console.log('Cita Actualizada');
        this.router.navigate(['/citas']);
      })
    } else {
      //agregar
      this._citaService.saveCita(cita).subscribe(() => {
        console.log('Cita agregada');
        this.router.navigate(['/citas']);
      })

    };
  }

  getCita(id: Number) {
    this._citaService.getCita(id).subscribe((data: Cita) => {
      console.log(data);
      this.form.setValue({
        alumno_id: data.alumno_id,
        cita_fecha: data.cita_fecha,
        cita_hora: data.cita_hora,
        cita_descripcion: data.cita_descripcion,
        citamodalidad_id: data.citaModalidad_id,
        citatipo_id: data.citaTipo_id,
        citaconfirmacion_id: data.citaconfirmacion ?? 0
      })
    })
  }


}
