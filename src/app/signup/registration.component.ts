import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { SignupModel } from '../model/SignupModel';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private signupService: SignupService){}

  private _signup: SignupModel = {
    name: null,
    lname: null,
    username: null,
    emailId: null,
    password: null,
    mobileNo: null
  };

  public get signup() : SignupModel {
    return this._signup;
  }

  public set signup(value : SignupModel) {
    this._signup = value;
  }

   ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.signupService.onSubmitForm(this.signup).subscribe(
      result => console.log('Success', result),
      error => console.log('Not Registered ', error)
    );
  }

}
