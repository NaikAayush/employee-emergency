import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  type = 'employee';
  constructor(
    public auth: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth,
    private http: HttpClient
  ) {}

  async ngOnInit() {
    const user = await this.auth.getUser();
    console.log(user.uid);
  }

  async signIn(event) {
    var x = await event;
    console.log(x.authResult.user.uid, this.type);
    var res = await this.http
      .post<any>(environment.apiUrl + 'login', {
        uid: x.authResult.user.uid,
        type: this.type,
      })
      .toPromise();

    console.log(res);
    console.log('IN');
  }
}
