import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Cita } from '../../../../shared/apis/api-fisibienestar/interfaces/cita';
import { CitaService } from '../../../../shared/apis/api-fisibienestar/services/cita/cita.service';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from '../../../../shared/pages/partials/progress-bar/progress-bar.component';

@Component({
  selector: 'app-list-citas',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  templateUrl: './list-citas.component.html',
  styleUrl: './list-citas.component.css'
})
export class ListCitasComponent {


  listCitas: Cita[] = []
  //Loading bar
  loading: boolean = false;
  constructor(private router: Router,
    private _citaService: CitaService
  ) {
  }
  ngOnInit(): void {
    this.getListCitas();
  }

  addCita() {
    this.router.navigate(['/citas/add']);
  }
  getListCitas() {
    this.loading = true;
    this._citaService.getListCitas().subscribe((data: Cita[]) => {
      this.listCitas = data;
      this.loading = false;
    })
  }
  updateCita(id: number) {
    this.router.navigate(['/citas/edit', id]);
  }
  deleteCita(id: number) {
    this._citaService.deleteCita(id).subscribe(() => {
      this.getListCitas();
    })
  }

}
