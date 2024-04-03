import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../interfaces/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = enviroment.endpoint;
    this.myApiUrl = 'api/alumnos';
  }

  getListAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.myAppUrl + this.myApiUrl);
  }
}
