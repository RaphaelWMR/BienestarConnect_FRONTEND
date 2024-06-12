import { Component } from '@angular/core';
import { CitaStatsService } from '../../../../shared/apis/api-fisibienestar/services/cita/cita-stats.service';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from '../../../../shared/pages/partials/progress-bar/progress-bar.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  //Loading bar
  loading: boolean = false;
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
    this.loading = true;
    this._citaStats.getCitasConfPorc().subscribe((data: any) => {
      this.porcentajeConfirmadas = data.porcentaje;
      this.loading = false;
    });
  }

  getCantidadCitas() {
    this._citaStats.getCantidadCitas().subscribe((data: any) => {
      this.cantidadCitas = data.ctasCount;
    });
  }
}
