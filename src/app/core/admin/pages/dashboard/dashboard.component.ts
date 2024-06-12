import { Component, AfterViewInit } from '@angular/core';
import { CitaStatsService } from '../../../../shared/apis/api-fisibienestar/services/cita/cita-stats.service';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from '../../../../shared/pages/partials/progress-bar/progress-bar.component';
import { Chart, registerables } from 'chart.js'; // Asegúrate de importar registerables
import { AlumnoStatsService } from '../../../../shared/apis/api-fisibienestar/services/alumno/alumno-stats.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

  // Loading bar
  loading: boolean = false;
  cantidadCitas: number = 0;
  porcentajeConfirmadas: number = 0;
  porcentajeObservados: number = 0;
  cantidadVirtual: number = 0;
  cantidadPresencial: number = 0;
  cantidadADM: number = 0;
  cantidadPSC: number = 0;
  constructor(private _citaStats: CitaStatsService, private _alumnoStats: AlumnoStatsService) { }

  ngOnInit(): void {
    this.getCantidadCitas();
    this.getPorcentajeCitasConfirmadas();
    this.getPorcentajeObservados();
    this.getCantidadModalidades();
    this.getCantidadTipo();
  }


  // Agregacion
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

  getPorcentajeObservados() {
    this._alumnoStats.getPorcentajeObservados().subscribe((data: any) => {
      this.porcentajeObservados = data.porcentaje;
    });
  }

  getCantidadModalidades() {
    this._citaStats.getCitasCountModalidad().subscribe((data: any) => {
      this.cantidadVirtual = data.virtual;
      this.cantidadPresencial = data.presencial;
      this.createModalidadPieChart();
    });
  }

  getCantidadTipo() {
    this._citaStats.getCitasCountTipo().subscribe((data: any) => {
      this.cantidadADM = data.adm;
      this.cantidadPSC = data.psico;
      this.createTipoPieChart();
    });
  }

  // Pie Charts

  createModalidadPieChart(): void {
    Chart.register(...registerables); // Registra todos los componentes necesarios

    const canvas = document.getElementById('modalidadPieChart') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ["Presencial", "Virtual"],
            datasets: [{
              data: [this.cantidadPresencial, this.cantidadVirtual],
              backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
              hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
              hoverBorderColor: "rgba(234, 236, 244, 1)",
            }],
          },
          options: {
            maintainAspectRatio: false,
            plugins: {
              tooltip: {
                enabled: true, // Asegúrate de que los tooltips estén habilitados
                backgroundColor: "rgb(255,255,255)",
                bodyColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                padding: 15,
                displayColors: true,
                caretPadding: 10,
                callbacks: {
                  label: function (context) {
                    let label = context.label || '';
                    let value = context.raw || 0;
                    return `${label}: ${value}`;
                  }
                }
              },
              legend: {
                display: false
              }
            },
            cutout: "80%",
          },
        });
      } else {
        console.error('Failed to get 2D context');
      }
    } else {
      console.error('Canvas element not found');
    }

  }

  createTipoPieChart(): void {
    Chart.register(...registerables); // Registra todos los componentes necesarios

    const canvas = document.getElementById('tipoPieChart') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ["Asesoría Piscopedagógica", "Orientación Académico - Administrativa"],
            datasets: [{
              data: [this.cantidadPSC, this.cantidadADM],
              backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
              hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
              hoverBorderColor: "rgba(234, 236, 244, 1)",
            }],
          },
          options: {
            maintainAspectRatio: false,
            plugins: {
              tooltip: {
                enabled: true, // Asegúrate de que los tooltips estén habilitados
                backgroundColor: "rgb(255,255,255)",
                bodyColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                padding: 15,
                displayColors: true,
                caretPadding: 10,
                callbacks: {
                  label: function (context) {
                    let label = context.label || '';
                    let value = context.raw || 0;
                    return `${label}: ${value}`;
                  }
                }
              },
              legend: {
                display: false
              }
            },
            cutout: "80%",
          },
        });
      } else {
        console.error('Failed to get 2D context');
      }
    } else {
      console.error('Canvas element not found');
    }
  }
}
