import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Login } from '../model/login-model';
import { LoginService } from '../service/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }
  private signin: Login = {
    emailId: null,
    password:  null
  };

  public get login() : Login {
    return this.signin;
  }

  public set login(value : Login) {
    this.signin = value;
  }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    // this.service.method(this.form).subscribe(data => this.employees.data);
    this.loginService.onSubmitForm(this.login).subscribe(
      result => console.log('Success', result),
      error => console.log('error', error)
    );
  }
}
