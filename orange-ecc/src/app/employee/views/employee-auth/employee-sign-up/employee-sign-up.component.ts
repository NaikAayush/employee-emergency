import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/employee/services/auth/auth.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-sign-up',
  templateUrl: './employee-sign-up.component.html',
  styleUrls: ['./employee-sign-up.component.scss'],
})
export class EmployeeSignUpComponent implements OnInit {
  public signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    emp_id: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', Validators.required),
    phone_no: new FormControl('', Validators.required),
    // emergency_contact: new FormControl('', Validators.required),
  });

  public pwdValid: boolean;

  constructor(public auth: AuthService, public router: Router) {}

  async ngOnInit() {
    this.auth.user$.subscribe((x) => {
      if (x.approved == false) {
        console.log(x);
        this.router.navigateByUrl('employee/verify');
      }
    });
  }
  checkPwd() {
    if (this.signUpForm.get('password').status == 'INVALID') {
      this.pwdValid = false;
    } else {
      this.pwdValid = true;
    }
  }

  emailClass() {
    if (this.signUpForm.get('email').status == 'VALID') {
      return { 'email-valid': true };
    }
    if (this.signUpForm.get('email').touched == false) {
      return { 'email-valid': true };
    } else {
      return { 'email-invalid': true };
    }
  }

  pwdErrorClass() {
    if (
      this.signUpForm.get('password').status == 'INVALID' &&
      this.signUpForm.get('password').touched == true
    ) {
      return { 'err-msg': true };
    } else {
      return { 'err-msg-inv': true };
    }
  }

  buttonClass() {}

  async onSubmit() {
    console.log(this.signUpForm.value);
    const creds: any = await this.auth.signUpWithEmail(
      this.signUpForm.value['email'],
      this.signUpForm.value['password']
    );

    const user = {
      name: this.signUpForm.value['name'],
      emp_id: this.signUpForm.value['emp_id'],
      uid: creds.uid,
      email: creds.email,
      phone: this.signUpForm.value['phone_no'],
    };

    console.log(user);

    this.auth.signUpData(user);
  }
}
