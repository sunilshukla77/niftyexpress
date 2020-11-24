import { NgForOf } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

   onSubmitForm(loginForm): Observable<any> {
    return this.http.post('http://localhost:8080/niftyexpress/signin', loginForm);
  } 
}
