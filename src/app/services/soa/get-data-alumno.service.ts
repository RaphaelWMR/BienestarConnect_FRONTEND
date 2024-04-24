import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlumnoSOA } from '../../interfaces/SOA/alumnoSOA';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataAlumnoService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'environment.dataAlumnoService';
    this.myApiUrl = 'datos/';
  }

  getDataAlumno(codigo: Number): Observable<AlumnoSOA> {
    return this.http.get<AlumnoSOA>(`${this.myAppUrl}${this.myApiUrl}${codigo}`);
  }

}
