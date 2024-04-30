import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { User } from '../../../shared/apis/api-fisibienestar/interfaces/user';
import { SharedDataService } from '../../../shared/shared-data/shared-data.service';
import { AlumnoService } from '../../../shared/apis/api-fisibienestar/services/alumno/alumno.service';
import { Alumno } from '../../../shared/apis/api-fisibienestar/interfaces/alumno';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup;
  listUsers: User[] = [
    {
      "user_id": 1,
      "user_name": "wilfredo.matos",
      "user_password": "1234",
      "user_role": "user"
    },
    {
      "user_id": 2,
      "user_name": "eduardo.escalante1",
      "user_password": "1234",
      "user_role": "user"
    },
    {
      "user_id": 0,
      "user_name": "karla.sanchez",
      "user_password": "1234",
      "user_role": "admin"
    }
  ];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sharedDataService: SharedDataService,
    private _AlumnoService: AlumnoService
  ) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const username = this.form.value.user;
    const password = this.form.value.password;

    // Buscar el usuario por nombre de usuario y contraseña
    const user = this.listUsers.find(u => u.user_name === username && u.user_password === password);

    if (user) {
      // Redirigir según el user_role
      if (user.user_role === 'admin') {
        this.router.navigate(['/dashboard'], { queryParams: { user_role: 'admin' } });
      } else if (user.user_role === 'user') {
        // Obtener el ID del alumno
        this.getAlumnoID(username).then((alumnoId) => {
          console.log(alumnoId); // Aquí puedes acceder al valor de alumnoId

          // Aquí dentro de la promesa, puedes continuar con la lógica que depende de alumnoId
          const navigationExtras: NavigationExtras = {
            state: {
              user_role: 'user',
              user_name: username,
              alumnoid: alumnoId
            }
          };
          this.sharedDataService.setAlumnoid(alumnoId.toString());
          localStorage.setItem('alumnoid', alumnoId.toString());

          this.sharedDataService.setUsername(username);
          this.router.navigate(['/user-home'], navigationExtras);
        }).catch((error) => {
          console.error('Error al obtener el ID del alumno:', error);
          alert('Error al obtener el ID del alumno');
        });
      }
    } else {
      // Lógica para manejar credenciales inválidas (por ejemplo, mostrar un mensaje de error)
      console.log('Credenciales inválidas');
      alert('Credenciales inválidas');
      // Aquí puedes agregar lógica para mostrar un mensaje de error al usuario en la interfaz
    }
  }

  async getAlumnoID(username: string): Promise<number> {
    try {
      const data = await this._AlumnoService.getAlumnoByUsername(username).toPromise(); // Espera la respuesta del servicio
      return data?.alumno_id ?? 0; // Devuelve alumno_id si está disponible, de lo contrario, devuelve 0
    } catch (error) {
      console.error(`Error al obtener el ID del alumno para el usuario ${username}`, error);
      return 0; // En caso de error, devuelve 0 o maneja el error de manera adecuada según tu lógica
    }
  }

}
