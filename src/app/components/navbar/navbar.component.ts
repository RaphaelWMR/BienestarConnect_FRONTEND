import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})


export class NavbarComponent {

  isActive: string = ''; // To store the currently active route

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.isActive = event.url;
      }
    });
  }
  showAlumnos() {
    this.router.navigate(['/alumnos']);
  }
}