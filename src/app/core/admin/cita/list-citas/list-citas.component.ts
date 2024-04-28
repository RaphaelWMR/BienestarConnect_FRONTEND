import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Cita } from '../../../../shared/apis/api-fisibienestar/interfaces/cita'; 
import { CitaService } from '../../../../shared/apis/api-fisibienestar/services/cita/cita.service'; 

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrl: './list-citas.component.css'
})
export class ListCitasComponent {


  listCitas: Cita[] = [
  ]
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
    this._citaService.getListCitas().subscribe((data: Cita[]) => {
      this.listCitas = data;
      console.log(this.listCitas);
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
