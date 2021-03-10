import { NgForOf } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ContactUsModel } from '../model/contact-us-model';


@Injectable({
  providedIn: 'root'
})
export class ContactusService {
  constructor(private http: HttpClient) { }
  onSubmitForm(contactusForm: ContactUsModel): Observable<any> {
    return this.http.post('http://localhost:8080/niftyexpress/contactus', contactusForm);
  }
}