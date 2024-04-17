import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ListAlumnosComponent } from '../../alumno/list-alumnos/list-alumnos.component';
import { AlumnoService } from '../../../services/alumno/alumno.service';
import { Alumno } from '../../../interfaces/alumno';
import { CitaModalidad } from '../../../interfaces/cita-modalidad';
import { CitaModalidadService } from '../../../services/cita/cita-modalidad.service';
import { CitaConfirmacionService } from '../../../services/cita/cita-confirmacion.service';
import { CitaTipoService } from '../../../services/cita/cita-tipo.service';
import { CitaConfirmacion } from '../../../interfaces/cita-confirmacion';
import { CitaTipo } from '../../../interfaces/cita-tipo';

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
    private fb: FormBuilder,
    private aRouter: ActivatedRoute,
    private _alumnoService: AlumnoService,
    private _modalidadService: CitaModalidadService,
    private _confirmacionService: CitaConfirmacionService,
    private _tipoService: CitaTipoService
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

  }
  cancel() {

  }
}
