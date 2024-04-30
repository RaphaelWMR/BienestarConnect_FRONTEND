import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FISI Bienestar';
  isLoginPage: boolean = false;
  isUser: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Verificar si la ruta es la página de inicio de sesión o "/"
        this.isLoginPage = event.url === '/login' || event.url === '/';

        // Verificar si la ruta comienza con "/user-home", "/user-citas" o "/user-disponibilidad"
        this.isUser = event.url.startsWith('/user-home') ||
          event.url.startsWith('/user-addCita') ||
          event.url.startsWith('/user-citas') ||
          event.url.startsWith('/user-disponibilidad');
      }
    });
  }
}
