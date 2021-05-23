import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-command-center-overview',
  templateUrl: './command-center-overview.page.html',
  styleUrls: ['./command-center-overview.page.scss'],
})
export class CommandCenterOverviewPage {
  @ViewChild('doubleLineCanvas') doubleLineCanvas: ElementRef;

  doubleLineChart: any;

  constructor() {}

  init() {
    this.doubleLineChartMethod();
  }

  doubleLineChartMethod() {
    this.doubleLineChart = new Chart(this.doubleLineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Time taken'],
        datasets: [
          {
            label: 'Facebook',
            data: [150, 250, 145, 100],
            backgroundColor: 'rgba(40,125,200,.5)',
            borderColor: 'rgb(40,100,200)',
            fill: true,
            lineTension: 0,
            radius: 5,
          },
          {
            label: 'Instagram',
            data: [30, 90, 151, 220],
            backgroundColor: 'rgba(240,78,71,.5)',
            borderColor: 'rgb(240,78,71)',
            fill: true,
            lineTension: 0.2,
            radius: 5,
          } as any,
        ],
      },

      options: {
        responsive: true,
        title: {
          display: true,
          position: 'top',
          text: 'Facebook to Instagram - Social Networking',
          fontSize: 12,
          fontColor: '#666',
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontColor: '#999',
            fontSize: 14,
          },
        },
      } as any,
    });
  }
}
