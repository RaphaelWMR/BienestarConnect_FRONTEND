import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ListAlumnosComponent } from './components/alumno/list-alumnos/list-alumnos.component';
import { AddEditAlumnoComponent } from './components/alumno/add-edit-alumno/add-edit-alumno.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ListCitasComponent } from './components/cita/list-citas/list-citas.component';
import { AddEditCitaComponent } from './components/cita/add-edit-cita/add-edit-cita.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { LoginComponent } from './components/login/login/login.component';

const routes: Routes = [
  // Home
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  // Alumnos
  { path: 'alumnos', component: ListAlumnosComponent },
  { path: 'alumnos/add', component: AddEditAlumnoComponent },
  { path: 'alumnos/edit/:id', component: AddEditAlumnoComponent },
  // Citas
  { path: 'citas', component: ListCitasComponent },
  { path: 'citas/add', component: AddEditCitaComponent },
  { path: 'citas/edit/:id', component: AddEditCitaComponent },
  // User
  // Pages
  { path: '**', component: NotfoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
