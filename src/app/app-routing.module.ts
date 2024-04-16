import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ListAlumnosComponent } from './components/alumno/list-alumnos/list-alumnos.component';
import { AddEditAlumnoComponent } from './components/alumno/add-edit-alumno/add-edit-alumno.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ListCitasComponent } from './components/cita/list-citas/list-citas.component';
import { AddEditCitaComponent } from './components/cita/add-edit-cita/add-edit-cita.component';

const routes: Routes = [
  // Home
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  // Alumnos
  { path: 'alumnos', component: ListAlumnosComponent },
  { path: 'alumnos/add', component: AddEditAlumnoComponent },
  { path: 'alumnos/edit/:id', component: AddEditAlumnoComponent },
  // Citas
  { path: 'citas', component: ListCitasComponent },
  { path: 'citas/add', component: AddEditCitaComponent },
  { path: 'citas/edit/:id', component: ListCitasComponent },
  // Pages
  { path: '**', redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
