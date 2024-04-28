import { Component } from '@angular/core';
import { CitaStatsService } from '../../../../shared/apis/api-fisibienestar/services/cita/cita-stats.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  cantidadCitas: number = 0;
  porcentajeConfirmadas: number = 0;
  ngOnInit(): void {
    this.getCantidadCitas();
    this.getCantidadAlumnos();
    this.getCantidadAlumnosObs();
    this.getPorcentajeCitasConfirmadas();

  }
  constructor(private _citaStats: CitaStatsService,) { }

  getCantidadAlumnos() {

  }

  getCantidadAlumnosObs() {

  }

  getPorcentajeCitasConfirmadas() {
    this._citaStats.getCitasConfPorc().subscribe((data: any) => {
      this.porcentajeConfirmadas = data.porcentaje;
    });
  }

  getCantidadCitas() {
    this._citaStats.getCantidadCitas().subscribe((data: any) => {
      this.cantidadCitas = data.ctasCount;
    });
  }
}
