import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { CitaTipo } from '../../interfaces/cita-tipo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaTipoService {
  private myAppUrl: string;
  private myApiUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/citatipo/';
  }
  getListTipo(): Observable<CitaTipo[]> {
    return this.http.get<CitaTipo[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
}
