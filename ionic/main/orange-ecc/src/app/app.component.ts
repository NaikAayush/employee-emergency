import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Command Center', url: '/cc', icon: 'business' },
    { title: 'ERT', url: '/ert', icon: 'people' },
    { title: 'Employee', url: '/employee', icon: 'body' },
    { title: 'Test Beacon', url: '/test/beacon', icon: 'body' },
    { title: 'Test WiFi', url: '/test/wifi', icon: 'body' },
  ];
  constructor() {}
}
