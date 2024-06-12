import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private myAppUrl: string;

  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) {
    this.myAppUrl = `${environment.endpoint}auth`;
  }
  login(user: any) {
    return this.http.post<any>(`${this.myAppUrl}/login/`, user).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']); // O cualquier otra ruta
      },
      err => {
        console.error(err);
        alert('Credenciales inválidas');
      }
    );
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
