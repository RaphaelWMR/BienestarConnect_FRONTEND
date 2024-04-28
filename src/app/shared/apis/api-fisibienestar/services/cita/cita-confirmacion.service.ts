import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment'; 
import { CitaConfirmacion } from '../../interfaces/cita-confirmacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaConfirmacionService {
  private myAppUrl: string;
  private myApiUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/citaconfirmacion/';
  }
  getListModalidad(): Observable<CitaConfirmacion[]> {
    return this.http.get<CitaConfirmacion[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
}
