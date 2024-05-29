import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(
    private router: Router
  ) {

  }
  navigate(route: string) {
    switch (route) {
      case "user-home": {
        this.router.navigate(['/user-home']);
        break;
      }
      case "dashboard": {
        this.router.navigate(['/dashboard']);
        break;
      }
      case "alumnos": {
        this.router.navigate(['/alumnos']);
        break;
      }
      case "citas": {
        this.router.navigate(['/citas']);
        break;
      }
    }
  }
}
