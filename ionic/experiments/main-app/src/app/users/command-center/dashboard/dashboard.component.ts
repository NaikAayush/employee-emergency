import { Component, ElementRef, ViewChild } from '@angular/core';
declare var require: any;
const trilat = require('trilat');

function initializeBeacons(coords: Array<Array<number>>): Array<Array<number>> {
  let newInput = [];

  coords.forEach((coord) => {
    newInput.push([coord[0], coord[1], 0]);
  });

  return newInput;
}

function getLocation(
  beacons: Array<Array<number>>,
  distances: Array<number>
): Array<number> {
  if (beacons.length != distances.length) {
    throw Error('Distances given do not match array length');
  }

  for (let i: number = 0; i < beacons.length; ++i) {
    beacons[i][2] = distances[i];
  }

  const pos = trilat(beacons);

  return pos;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  /**
   * 'plug into' DOM canvas element using @ViewChild
   */
  @ViewChild('canvas') canvasEl: ElementRef;

  /**
   * Reference Canvas object
   */
  private _CANVAS: any;

  /**
   * Reference the context for the Canvas element
   */
  private _CONTEXT: any;

  // beacon1 = 100;
  // beacon2 = 100;
  // beacon3 = 100;

  private img: HTMLImageElement;

  private width = 704;
  private height = 366;

  private beacons: Array<Array<number>> = initializeBeacons([
    [220, 366],
    [60, 366],
    [220, 206],
  ]);

  private allDots: any;
  constructor() {}

  /**
   * Implement functionality as soon as the template view has loaded
   *
   * @public
   * @method ionViewDidLoad
   * @return {none}
   */
  ionViewDidEnter(): void {
    this._CANVAS = this.canvasEl.nativeElement;
    this._CANVAS.width = this.width;
    this._CANVAS.height = this.height;

    this.initialiseCanvas();
    this.drawCircle();

    const userIds = [
      'leUKab3VjIe42HgCq0qPafS1FLs2',
      '592s1XmfNwYujg7Y1thbkDyOTZf2',
    ];

    this.allDots = {};

    userIds.forEach((uid) => {
      const listenWs = new WebSocket(`ws://34.87.56.251:5050/listen?id=${uid}`);

      listenWs.addEventListener('open', function (event) {
        listenWs.send('Hello Server!');
      });

      listenWs.addEventListener('message', (event) => {
        try {
          let data = JSON.parse(event.data);
          console.log('Message from server ', data);

          this.drawCircle();

          // this.drawDot(data.x, data.y, uid)

          this.allDots[uid] = data;

          this.drawDots();
        } catch (error) {
          console.log('Bad data from WS', error);
        }
      });
    });
  }

  /**
   * Detect if HTML5 Canvas is supported and, if so, configure the
   * canvas element accordingly
   *
   * @public
   * @method initialiseCanvas
   * @return {none}
   */
  initialiseCanvas(): void {
    if (this._CANVAS.getContext) {
      this.setupCanvas();
      this.img = new Image();
      this.img.addEventListener('load', () => {
        this._CONTEXT.drawImage(this.img, 0, 0);
      });
      this.img.src = 'assets/flooplan-new.png';
    }
  }

  /**
   * Create a circle using canvas drawing API
   *
   * @public
   * @method drawCircle
   * @return {none}
   */
  drawCircle(): void {
    this.clearCanvas();

    const ctx = this._CONTEXT;
    ctx.drawImage(this.img, 0, 0);

    // this.drawDot()

    this.beacons.forEach((item, idx) => {
      this.drawDot(
        item[0],
        this.height - item[1],
        `beacon${idx}`,
        'black',
        10,
        15
      );
    });
  }

  drawDot(
    x: number,
    y: number,
    text: string,
    color: string = 'red',
    offsetX: number = 10,
    offsetY: number = 0
  ): void {
    const ctx = this._CONTEXT;

    ctx.beginPath();

    ctx.font = 'bold 20px arial';
    ctx.fillStyle = color;

    // const pos = getLocation(this.beacons, [this.beacon1, this.beacon2, this.beacon3])
    // console.log(pos)

    ctx.arc(x, y, 10, 0, Math.PI * 2, true);
    ctx.fillText(text, x + offsetX, y + offsetY);

    ctx.fill();
  }

  drawDots() {
    for (const uid in this.allDots) {
      this.drawDot(
        this.allDots[uid].x,
        this.allDots[uid].y,
        this.allDots[uid].name
      );
    }
  }

  /**
   * Configure the Canvas element
   *
   * @public
   * @method setupCanvas
   * @return {none}
   */
  setupCanvas(): void {
    this._CONTEXT = this._CANVAS.getContext('2d');
    // this._CONTEXT.fillStyle = "#3e3e3e";
    // this._CONTEXT.fillRect(0, 0, 500, 500);
  }

  /**
   * Reset the Canvas element/clear previous content
   *
   * @public
   * @method clearCanvas
   * @return {none}
   */
  clearCanvas(): void {
    this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
    this.setupCanvas();
  }
}
