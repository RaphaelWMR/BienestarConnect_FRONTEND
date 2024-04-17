import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AddEditAlumnoComponent } from './components/alumno/add-edit-alumno/add-edit-alumno.component';
import { ListAlumnosComponent } from './components/alumno/list-alumnos/list-alumnos.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ListCitasComponent } from './components/cita/list-citas/list-citas.component';
import { AddEditCitaComponent } from './components/cita/add-edit-cita/add-edit-cita.component';
import { BsDatepickerConfig, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    HomeComponent,
    ListCitasComponent,
    AddEditCitaComponent
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
