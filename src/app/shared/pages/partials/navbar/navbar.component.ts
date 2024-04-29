import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SharedDataService } from '../../../shared-data/shared-data.service';
import { Alumno } from '../../../apis/api-fisibienestar/interfaces/alumno';
import { AlumnoService } from '../../../apis/api-fisibienestar/services/alumno/alumno.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})


export class NavbarComponent {

  isActive: string = ''; // To store the currently active route
  username: string = '';
  alumno: Alumno | undefined;
  constructor(private router: Router,
    private sharedDataService: SharedDataService,
    private getAlumnoByEmailService: AlumnoService) {

  }

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.isActive = event.url;
      }
    });
    this.getUser();
  }
  getUser() {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.username = storedUsername;
    } else {
      this.sharedDataService.getUsername().subscribe((username) => {
        this.username = username;
        localStorage.setItem('username', this.username);
      });
    }
  }

}