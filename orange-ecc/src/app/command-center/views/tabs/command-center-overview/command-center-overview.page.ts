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

  public masterData = [
    { building: 'Tower A', floor: 2, emp: 525, ert: 40 },
    { building: 'Tower A', floor: 3, emp: 1378, ert: 63 },
    { building: 'Tower A', floor: 4, emp: 264, ert: 8 },
    { building: 'Tower C', floor: 1, emp: 610, ert: 43 },
    { building: 'Tower D', floor: 4, emp: 133, ert: 21 },
    { building: 'Tower B', floor: 3, emp: 853, ert: 32 },
  ];

  public attendanceData = [
    {
      name: 'Jane Cooper',
      img: 'assets/ert-images/0.png',
      emp_id: 'EY-100',
      tow: 'A',
      floor: 3,
      status: 'Exited',
      color: true,
    },
    {
      name: 'Toni Perkins',
      img: 'assets/ert-images/3.png',
      emp_id: 'EY-87',
      tow: 'B',
      floor: 8,
      status: 'Stuck',
      color: false,
    },
    {
      name: 'Nicholas Bishop',
      img: 'assets/ert-images/2.png',
      emp_id: 'EY-1110',
      tow: 'D',
      floor: 2,
      status: 'Exited',
      color: true,
    },
    {
      name: 'Derrick Russell',
      img: 'assets/ert-images/6.png',
      emp_id: 'EY-344',
      tow: 'C',
      floor: 5,
      status: 'Stuck',
      color: false,
    },
  ];

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
