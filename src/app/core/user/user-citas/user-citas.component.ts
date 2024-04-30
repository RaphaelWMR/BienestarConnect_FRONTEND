import { Component, Inject, OnInit } from '@angular/core';
import { Cita } from '../../../shared/apis/api-fisibienestar/interfaces/cita';
import { CitaService } from '../../../shared/apis/api-fisibienestar/services/cita/cita.service';
import { SharedDataService } from '../../../shared/shared-data/shared-data.service';
@Component({
  selector: 'app-user-citas',
  templateUrl: './user-citas.component.html',
  styleUrl: './user-citas.component.css'
})
export class UserCitasComponent implements OnInit {
  listCitas: Cita[] = [];
  constructor(private _citaService: CitaService,
    private sharedDataService: SharedDataService,
  ) {
    this.getListCitas();
  }
  ngOnInit(): void {
    // ...
  }

  getListCitas() {
    if (typeof localStorage !== 'undefined') {
      const alumnoid = localStorage.getItem('alumnoid') ?? '0';
      const alumnoidNumber = parseInt(alumnoid, 10); // Convierte alumnoid a número
      console.log("id:", alumnoidNumber);
      this._citaService.getListCitasByAlumno(alumnoidNumber).subscribe((data: any) => {
        if (Array.isArray(data)) {
          this.listCitas = data;
        } else if (data instanceof Object) {
          // Si data es un solo objeto, podemos convertirlo en un array de un solo elemento
          this.listCitas = [data];
        } else {
          // Manejar otros casos según sea necesario
          console.error('Unexpected data format:', data);
        }
        console.log(this.listCitas);
      }, error => {
        console.error('Error fetching citas:', error);
      });
    }
  }


  deleteCita(id: number) {
    this._citaService.deleteCita(id).subscribe(() => {
      this.getListCitas();
    })
  }
}
