//import { NgForOf } from '@angular/common';
import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { NgForm,ValidatorFn, AbstractControl } from '@angular/forms';
//import { Observable } from 'rxjs';
//import { SignupModel } from '../model/SignupModel';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true };
    };
  }

  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  //constructor(private http: HttpClient) { }
  //onSubmitForm(signupForm: SignupModel): Observable<any> {
  //  return this.http.post('http://localhost:8080/niftyexpress/signup', signupForm);
  //}
}
