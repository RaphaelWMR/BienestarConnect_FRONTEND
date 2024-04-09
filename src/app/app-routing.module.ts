import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAlumnosComponent } from './components/list-alumnos/list-alumnos.component';
import { AddEditAlumnoComponent } from './components/add-edit-alumno/add-edit-alumno.component';

const routes: Routes = [
  { path: '', component: ListAlumnosComponent },
  { path: 'add', component: AddEditAlumnoComponent },
  { path: 'edit/:id', component: AddEditAlumnoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
