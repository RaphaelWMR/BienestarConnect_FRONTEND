import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private myAppUrl: string;
  private myApiUrl: string;
  chatMessages: string[] = []; // Declarar chatMessages como una matriz de cadenas


  constructor(private http: HttpClient) {

    this.myAppUrl = 'http://localhost:5001/';
    this.myApiUrl = 'pregunta';

  }

  sendMessage(userInput: string): Observable<any> {
    const data = { user: userInput };
    const url = `${this.myAppUrl}${this.myApiUrl}`;
    return this.http.post<any>(url, data);
  }

}
