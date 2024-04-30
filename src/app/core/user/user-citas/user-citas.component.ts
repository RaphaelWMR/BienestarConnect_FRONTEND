import { Component, Inject, OnInit } from '@angular/core';
import { Cita } from '../../../shared/apis/api-fisibienestar/interfaces/cita';
import { CitaService } from '../../../shared/apis/api-fisibienestar/services/cita/cita.service';
@Component({
  selector: 'app-user-citas',
  templateUrl: './user-citas.component.html',
  styleUrl: './user-citas.component.css'
})
export class UserCitasComponent implements OnInit {
  listCitas: Cita[] = [
    {
      "cita_id": 19,
      "alumno_id": 7,
      "cita_fecha": new Date("2024-09-20"),
      "cita_hora": "15:15:00",
      "cita_descripcion": "Carnet Perdido",
      "citaModalidad_id": 0,
      "citaTipo_id": 0,
      "citaconfirmacion_id": 0,
    },
    {
      "cita_id": 20,
      "alumno_id": 7,
      "cita_fecha": new Date("2024-07-20"),
      "cita_hora": "15:15:00",
      "cita_descripcion": "Asesoria ",
      "citaModalidad_id": 0,
      "citaTipo_id": 1,
      "citaconfirmacion_id": 0
    }
  ];
  constructor(private _citaService: CitaService) {

  }
  ngOnInit(): void {
    // ...
  }

  getListCitas(){
    
  }

  deleteCita(id: number) {
    this._citaService.deleteCita(id).subscribe(() => {
      this.getListCitas();
    })
  }
}
