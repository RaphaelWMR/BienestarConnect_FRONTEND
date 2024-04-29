
import { NotfoundComponent } from './shared/pages/notfound/notfound.component'; 
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { NavbarComponent } from './shared/pages/partials/navbar/navbar.component'; 
import { AddEditAlumnoComponent } from './core/admin/alumno/add-edit-alumno/add-edit-alumno.component'; 
import { ListAlumnosComponent } from './core/admin/alumno/list-alumnos/list-alumnos.component'; 
import { ProgressBarComponent } from './shared/ui/progress-bar/progress-bar.component';
import { DashboardComponent } from './core/admin/pages/dashboard/dashboard.component'; 
import { ListCitasComponent } from './core/admin/cita/list-citas/list-citas.component'; 
import { AddEditCitaComponent } from './core/admin/cita/add-edit-cita/add-edit-cita.component'; 
import { BsDatepickerConfig, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './shared/pages/partials/footer/footer.component'; 
import { SidebarComponent } from './shared/pages/partials/sidebar/sidebar.component'; 
import { HomeUserComponent } from './core/admin/user-pages/home-user/home-user.component'; 
import { AddEditCitaUserComponent } from './core/admin/user-pages/add-edit-cita-user/add-edit-cita-user.component'; 
import { ListCitasUserComponent } from './core/admin/user-pages/list-citas-user/list-citas-user.component'; 
import { LoginComponent } from './core/auth/login/login.component'; 
import { HelpCRMComponent } from './core/admin/pages/help-crm/help-crm.component'; 
import { ChatCRMComponent } from './core/admin/pages/chat-crm/chat-crm.component';
import { UserHomeComponent } from './core/user/user-home/user-home.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    DashboardComponent,
    ListCitasComponent,
    AddEditCitaComponent,
    FooterComponent,
    SidebarComponent,
    HomeUserComponent,
    AddEditCitaUserComponent,
    ListCitasUserComponent,
    NotfoundComponent,
    LoginComponent,
    HelpCRMComponent,
    ChatCRMComponent,
    UserHomeComponent
  ],
  imports: [
    ListAlumnosComponent,
    AddEditAlumnoComponent,
    NavbarComponent,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right'
    }), // ToastrModule added
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  exports: [

  ],
  providers: [
    provideClientHydration(),
    BsDatepickerConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
