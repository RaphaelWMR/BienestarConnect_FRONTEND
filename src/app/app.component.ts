import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ListAlumnosComponent } from "./components/list-alumnos/list-alumnos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    NavbarComponent,
    ListAlumnosComponent
  ]
})
export class AppComponent {
  title = 'FRONTEND';
}
