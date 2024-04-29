import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SharedDataService } from '../../../shared-data/shared-data.service';
import { Alumno } from '../../../apis/api-fisibienestar/interfaces/alumno';
import { AlumnoService } from '../../../apis/api-fisibienestar/services/alumno/alumno.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isActive: string = ''; // Para almacenar la ruta activa actualmente
  username: string = '';
  alumno: Alumno | undefined;

  constructor(
    private router: Router,
    private sharedDataService: SharedDataService,
    private getAlumnoByEmailService: AlumnoService
  ) { }

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.isActive = event.url;
      }
    });
    this.getUser();
  }

  getUser() {
    if (typeof localStorage !== 'undefined') {
      const storedUsername = localStorage.getItem('username');
      if (storedUsername == 'karla.sanchez') {
        this.username = "karla.sanchez";
      } else {
        if (storedUsername) {
          this.username = storedUsername;
        } else {
          this.sharedDataService.getUsername().subscribe((username) => {
            this.username = username;
          });
        }
      }
      localStorage.setItem('username', this.username);
    } else {
      // Si localStorage no está disponible (por ejemplo, durante SSR),
      // podrías manejar este escenario de manera alternativa.
      // Por ejemplo, podrías obtener el nombre de usuario solo cuando
      // localStorage está disponible, o usar una estrategia diferente
      // de almacenamiento en función de tus necesidades.
      console.warn('localStorage is not available. Username cannot be retrieved.');
    }
  }

}
