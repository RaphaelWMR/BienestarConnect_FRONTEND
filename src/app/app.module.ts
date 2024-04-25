;
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { AddEditAlumnoComponent } from './components/alumno/add-edit-alumno/add-edit-alumno.component';
import { ListAlumnosComponent } from './components/alumno/list-alumnos/list-alumnos.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ListCitasComponent } from './components/cita/list-citas/list-citas.component';
import { AddEditCitaComponent } from './components/cita/add-edit-cita/add-edit-cita.component';
import { BsDatepickerConfig, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/partials/footer/footer.component';
import { SidebarComponent } from './components/partials/sidebar/sidebar.component';
import { HomeUserComponent } from './components/user-pages/home-user/home-user.component';
import { AddEditCitaUserComponent } from './components/user-pages/add-edit-cita-user/add-edit-cita-user.component';
import { ListCitasUserComponent } from './components/user-pages/list-citas-user/list-citas-user.component';
import { LoginComponent } from './components/login/login/login.component';
import { HelpCRMComponent } from './components/pages/help-crm/help-crm.component';
import { ChatCRMComponent } from './components/pages/chat-crm/chat-crm.component';



@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    HomeComponent,
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
    ChatCRMComponent
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
