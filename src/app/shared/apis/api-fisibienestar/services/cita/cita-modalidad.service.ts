import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CitaModalidad } from '../../interfaces/cita-modalidad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaModalidadService {
  private myAppUrl: string;
  private myApiUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/citamodalidad/';
  }
  getListModalidad(): Observable<CitaModalidad[]> {
    return this.http.get<CitaModalidad[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
}