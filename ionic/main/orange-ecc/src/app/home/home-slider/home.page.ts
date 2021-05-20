import { Component, OnInit, ViewChild } from '@angular/core';
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
  constructor() {}

  ngOnInit() {}

  @ViewChild('mySlider') slides: IonSlides;

  swipeNext() {
    this.slides.slideNext();
  }
}
