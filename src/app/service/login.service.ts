import { NgForOf } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Login } from '../model/login-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  onSubmitForm(loginform: Login): Observable<any> {
    return this.http.post('http://localhost:8080/niftyexpress/signin', loginform);
  }
 
}
