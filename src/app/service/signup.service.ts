import { NgForOf } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { SignupModel } from '../model/SignupModel';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  onSubmitForm(signupForm : SignupModel) : Observable<any> {

    return this.http.post('http://localhost:8080/niftyexpress/signup', signupForm);

  }

  
}
