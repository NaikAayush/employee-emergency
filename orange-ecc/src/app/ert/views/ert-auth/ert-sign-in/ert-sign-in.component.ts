import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ert-sign-in',
  templateUrl: './ert-sign-in.component.html',
  styleUrls: ['./ert-sign-in.component.scss'],
})
export class ErtSignInComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigateByUrl('ert/ert-tabs/ert/ert-tabs/chat');
  }
}
