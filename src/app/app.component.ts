import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
//Modules
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
//Components
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ListAlumnosComponent } from "./components/list-alumnos/list-alumnos.component";
import { AddEditAlumnoComponent } from './components/add-edit-alumno/add-edit-alumno.component';
import { HttpClient } from '@angular/common/http';

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
    ListAlumnosComponent,
    AddEditAlumnoComponent,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AppComponent {
  title = 'FRONTEND';
}
