import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DynamicForm } from '../model/form';

@Injectable({
  providedIn: 'root'
})
export class FormThingService {
  api = "http://localhost:3000/form"
  constructor(private http: HttpClient) { }

  fetchForm(): Observable<DynamicForm> {
    return this.http.get<DynamicForm>(this.api);
  }

  sendForm(body: any) {
    console.log(body);
    this.http.post(this.api, body).subscribe();
  }
}
