import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-employee-sign-in',
  templateUrl: './employee-sign-in.component.html',
  styleUrls: ['./employee-sign-in.component.scss'],
})
export class EmployeeSignInComponent implements OnInit {
  public signInForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', Validators.required),
  });
  public pwdValid: boolean;
  constructor(public auth: AuthService, public router: Router) {}

  ngOnInit() {
    this.auth.user$.subscribe((x: any) => {
      if (x.approved == false) {
        console.log(x);
        // this.router.navigateByUrl('employee/verify');
        this.router.navigateByUrl('employee/employee-tabs');
      }
    });
  }

  checkPwd() {
    if (this.signInForm.get('password').status == 'INVALID') {
      this.pwdValid = false;
    } else {
      this.pwdValid = true;
    }
  }

  emailClass() {
    if (this.signInForm.get('email').status == 'VALID') {
      return { 'email-valid': true };
    }
    if (this.signInForm.get('email').touched == false) {
      return { 'email-valid': true };
    } else {
      return { 'email-invalid': true };
    }
  }

  pwdErrorClass() {
    if (
      this.signInForm.get('password').status == 'INVALID' &&
      this.signInForm.get('password').touched == true
    ) {
      return { 'err-msg': true };
    } else {
      return { 'err-msg-inv': true };
    }
  }

  buttonClass() {}

  async onSubmit() {
    console.log(this.signInForm.value);
    await this.auth.signInWithEmail(
      this.signInForm.value['email'],
      this.signInForm.value['password']
    );
    this.ngOnInit();
  }
}
