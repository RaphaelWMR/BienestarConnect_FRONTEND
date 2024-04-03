import { Routes } from '@angular/router';
//Componentes
import { ListAlumnosComponent } from './components/list-alumnos/list-alumnos.component';
import { AddEditAlumnoComponent } from './components/add-edit-alumno/add-edit-alumno.component';

export const routes: Routes = [
    { path: '', component: ListAlumnosComponent },
    { path: 'add', component: AddEditAlumnoComponent },
    { path: 'edit/:id', component: AddEditAlumnoComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
