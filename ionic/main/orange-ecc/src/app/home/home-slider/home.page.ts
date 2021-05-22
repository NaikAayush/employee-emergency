import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };
  constructor(private router: Router) {}

  ngOnInit() {}

  @ViewChild('mySlider') slides: IonSlides;

  swipeNext() {
    this.slides.slideNext();
  }

  navigateToEmployee() {
    this.router.navigateByUrl('/employee');
  }
  navigateToERT() {
    this.router.navigateByUrl('/ert');
  }
}
