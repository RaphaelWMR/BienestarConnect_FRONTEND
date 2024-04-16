import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAlumnosComponent } from './components/alumno/list-alumnos/list-alumnos.component';
import { AddEditAlumnoComponent } from './components/alumno/add-edit-alumno/add-edit-alumno.component';

const routes: Routes = [
  { path: '', component: ListAlumnosComponent },
  { path: 'alumnos', component: ListAlumnosComponent },
  { path: 'alumnos/add', component: AddEditAlumnoComponent },
  { path: 'alumnos/edit/:id', component: AddEditAlumnoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
