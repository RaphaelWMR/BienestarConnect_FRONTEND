import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { User } from '../../../shared/apis/api-fisibienestar/interfaces/user';
import { SharedDataService } from '../../../shared/shared-data/shared-data.service';

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
    private sharedDataService: SharedDataService
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
        const navigationExtras: NavigationExtras = {
          state: {
            user_role: 'user',
            user_name: username
          }
        };
        this.sharedDataService.setUsername(username);
        this.router.navigate(['/user-home'],navigationExtras);
      }
    } else {
      // Lógica para manejar credenciales inválidas (por ejemplo, mostrar un mensaje de error)
      console.log('Credenciales inválidas');
      alert("Credenciales invalidas");
      // Aquí puedes agregar lógica para mostrar un mensaje de error al usuario en la interfaz
    }
  }
}
