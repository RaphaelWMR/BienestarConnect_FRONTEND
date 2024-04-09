import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modulos
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddEditAlumnoComponent } from './components/add-edit-alumno/add-edit-alumno.component';
import { ListAlumnosComponent } from './components/list-alumnos/list-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponent,
    ReactiveFormsModule,
    HttpClientModule,
    AddEditAlumnoComponent,
    ListAlumnosComponent,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
