import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { WebsocketService } from 'src/app/services/websocket.service';

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
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  @ViewChild('canvas') canvasEl: ElementRef;

  /**
   * Reference Canvas object
   */
  private _CANVAS: any;

  /**
   * Reference the context for the Canvas element
   */
  private _CONTEXT: any;

  beacon1 = 100;
  beacon2 = 100;
  beacon3 = 100;

  private img: HTMLImageElement;

  private width = 704;
  private height = 366;

  private beacons: Array<Array<number>> = initializeBeacons([
    [220, 366],
    [60, 366],
    [220, 206],
  ]);

  constructor(private service: WebsocketService, public auth: AuthService) {
    this.init();
  }

  async init() {
    const user = await this.auth.getUser();
    console.log(user.uid);
    // this.service.connect('update?id=' + user.uid);
  }

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
    ctx.save();

    ctx.beginPath();
    this.drawDot();
    ctx.fill();
    console.log('DRAWWW');
  }

  drawDot(): void {
    const ctx = this._CONTEXT;
    ctx.restore();

    ctx.font = 'bold 20px serif';
    ctx.fillStyle = 'red';

    const pos = getLocation(this.beacons, [
      this.beacon1,
      this.beacon2,
      this.beacon3,
    ]);
    console.log(pos);

    const x = pos[0];
    const y = this.height - pos[1];

    ctx.arc(x, y, 10, 0, Math.PI * 2, true);
    ctx.fillText('You are here', x + 10, y);
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
    this._CONTEXT.fillStyle = '#3e3e3e';
    this._CONTEXT.fillRect(0, 0, 500, 500);
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

  ngOnInit() {}
}
