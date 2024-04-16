import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ListAlumnosComponent } from './components/alumno/list-alumnos/list-alumnos.component';
import { AddEditAlumnoComponent } from './components/alumno/add-edit-alumno/add-edit-alumno.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  // Home
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  // Alumnos
  { path: 'alumnos', component: ListAlumnosComponent },
  { path: 'alumnos/add', component: AddEditAlumnoComponent },
  { path: 'alumnos/edit/:id', component: AddEditAlumnoComponent },

  // Pages
  { path: '**', redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
