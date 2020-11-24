import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { LoginService } from '../service/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  loginForm = new FormGroup({
    emailId : new FormControl(),
    password : new FormControl()
  });

  ngOnInit() {
  }
  onSubmit() {
    // this.service.method(this.form).subscribe(data => this.employees.data);
    // this.loginService.onSubmitForm(this.login).subscribe(
      // result => console.log('Success', result),
      // error => console.log('error', error)
      console.log(this.loginForm.value);
  }
}
