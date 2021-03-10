import { Component, OnInit } from '@angular/core';
import { ContactUsModel } from '../model/contact-us-model';
import { ContactusService } from '../service/contactus.service';
import { NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor(private contactusService: ContactusService){}

  private _contactus: ContactUsModel = {
    firstname: null,
    lastname: null,
    contactno: null,
    email: null,
    subject: null,
    message: null
  };

  public get contactus() : ContactUsModel {
    return this._contactus;
  }

  public set contactus(value : ContactUsModel) {
    this._contactus = value;
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.contactusService.onSubmitForm(this.contactus).subscribe(
      result => console.log('Success', result),
      error => console.log('Not Registered ', error)
    );
  }


}
