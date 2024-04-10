import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../interfaces/alumno';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/alumnos/';
  }

  getListAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteAlumno(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }
  saveAlumno(alumno: Alumno): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, alumno);
  }
}