import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupModel } from '../model/SignupModel';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  private _signup: SignupModel = {
    fname: null,
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

  constructor(private signupService: SignupService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){

  }

}
