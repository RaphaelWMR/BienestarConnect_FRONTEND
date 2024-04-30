import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ListAlumnosComponent } from './core/admin/alumno/list-alumnos/list-alumnos.component';
import { AddEditAlumnoComponent } from './core/admin/alumno/add-edit-alumno/add-edit-alumno.component';
import { DashboardComponent } from './core/admin/pages/dashboard/dashboard.component';
import { ListCitasComponent } from './core/admin/cita/list-citas/list-citas.component';
import { AddEditCitaComponent } from './core/admin/cita/add-edit-cita/add-edit-cita.component';
import { NotfoundComponent } from './shared/pages/notfound/notfound.component';
import { LoginComponent } from './core/auth/login/login.component';
import { HelpCRMComponent } from './core/admin/pages/help-crm/help-crm.component';
import { ChatCRMComponent } from './core/admin/pages/chat-crm/chat-crm.component';
import { UserHomeComponent } from './core/user/user-home/user-home.component';
import { LogoutComponent } from './core/auth/logout/logout.component';
import { ChatbotComponentComponent } from './shared/pages/chatbot/chatbot-component/chatbot-component.component';
import { UserCitasComponent } from './core/user/user-citas/user-citas.component';
import { UserCheckAvailabilityComponent } from './core/user/user-check-availability/user-check-availability.component';
import { UserAddCitaComponent } from './core/user/user-add-cita/user-add-cita.component';

const routes: Routes = [
  // Home
  { path: '', component: LoginComponent },
  // Auth *************************************************************************
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  //Admin *************************************************************************
  { path: 'dashboard', component: DashboardComponent },
  // Alumnos
  { path: 'alumnos', component: ListAlumnosComponent },
  { path: 'alumnos/add', component: AddEditAlumnoComponent },
  { path: 'alumnos/edit/:id', component: AddEditAlumnoComponent },
  // Citas
  { path: 'citas', component: ListCitasComponent },
  { path: 'citas/add', component: AddEditCitaComponent },
  { path: 'citas/edit/:id', component: AddEditCitaComponent },
  // User *************************************************************************
  { path: 'user-home', component: UserHomeComponent },
  { path: 'user-addCita', component: UserAddCitaComponent},
  { path: 'user-citas', component: UserCitasComponent },
  { path: 'user-disponibilidad', component: UserCheckAvailabilityComponent },
  // Pages ************************************************************************
  { path: "help", component: HelpCRMComponent },
  { path: "chatbot", component: ChatbotComponentComponent },
  { path: "chat", component: ChatCRMComponent },
  { path: '**', component: NotfoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
