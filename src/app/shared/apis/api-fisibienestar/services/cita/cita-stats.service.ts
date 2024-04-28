import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaStatsService {

  private myAppUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
  }
  getCantidadCitas(): Observable<number> {
    return this.http.get<number>(`${this.myAppUrl}${'api/citas/count'}`);
  }
  getCitasConfPorc(): Observable<number> {
    return this.http.get<number>(`${this.myAppUrl}${'api/citas/porConf'}`);
  }
}
