import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnoStatsService {

  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
  }
  getPorcentajeObservados(): Observable<number> {
    return this.http.get<number>(`${this.myAppUrl}${'api/alumnos/percObs'}`);
  }
  
}
