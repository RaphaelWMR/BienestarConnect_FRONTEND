import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlumnoWS } from '../interfaces/alumnoWS'; 
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class GetDataAlumnoService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.dataAlumnoService;
    this.myApiUrl = 'datos/';
  }

  getDataAlumno(codigo: Number): Observable<AlumnoWS> {
    const cadena: string = `${this.myAppUrl}${this.myApiUrl}${codigo}`;
    return this.http.get<AlumnoWS>(cadena);
  }

}
