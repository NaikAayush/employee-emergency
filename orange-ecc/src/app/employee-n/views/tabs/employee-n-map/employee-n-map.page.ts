import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-n-map',
  templateUrl: './employee-n-map.page.html',
  styleUrls: ['./employee-n-map.page.scss'],
})
export class EmployeeNMapPage implements OnInit {
  location: String;
  status = false;
  constructor() {}

  ngOnInit() {}

  hello() {
    console.log('hi');
  }

  setLoc(location) {
    this.status = true;
    this.location = location;
  }
}
