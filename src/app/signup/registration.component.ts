import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
import { SignupModel } from '../model/SignupModel';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,
    private customValidator: SignupService){}

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
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lname: ['',Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      mobileNo: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.customValidator.onSubmitForm(this.signup).subscribe(
      result => console.log('Success', result),
      error => console.log('Not Registered ', error)
    );

  }

}
