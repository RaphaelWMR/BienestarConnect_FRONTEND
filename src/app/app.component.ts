import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FISI Bienestar';
  isLoginPage: boolean = false;
  isUser: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.url === '/login' || event.url == "/";
      }
    });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isUser = event.url.startsWith('/user-home')
      }
    });
  }



}
