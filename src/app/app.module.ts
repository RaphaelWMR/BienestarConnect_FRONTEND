import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AddEditAlumnoComponent } from './components/add-edit-alumno/add-edit-alumno.component';
import { ListAlumnosComponent } from './components/list-alumnos/list-alumnos.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';




@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent
  ],
  imports: [
    ListAlumnosComponent,
    AddEditAlumnoComponent,
    NavbarComponent,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right'
    }), // ToastrModule added
  ],
  exports: [

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
