import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private usernameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private alumnoidSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }
  setAlumnoid(alumnoid: string): void {
    this.alumnoidSubject.next(alumnoid);
  }

  getAlumnoid(): Observable<string> {
    return this.alumnoidSubject.asObservable();
  }

  setUsername(username: string): void {
    this.usernameSubject.next(username);
  }

  getUsername(): Observable<string> {
    return this.usernameSubject.asObservable();
  }
}
