import {
    Component,
    ElementRef,
    Input,
    ViewChild
} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.page.html'
})
export class HomePage {

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

    xRange = 300;
    yRange = 100;

    private img: HTMLImageElement;

    constructor(public navCtrl: NavController) {
        // thats what i was asking, where to declae
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
        this._CANVAS.width = 704;
        this._CANVAS.height = 366;

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
            this.img = new Image()
            this.img.addEventListener('load', () => {
                this._CONTEXT.drawImage(this.img, 0, 0)
            })
            this.img.src = "assets/flooplan-new.png"
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

        const ctx = this._CONTEXT
        ctx.drawImage(this.img, 0, 0)
        ctx.save()

        ctx.beginPath()
        this.drawDot()
        ctx.fill()
    }

    drawDot(): void {
        const ctx = this._CONTEXT
        ctx.restore()

        ctx.font = 'bold 20px serif';
        ctx.fillStyle = 'red'
        let x = this.xRange
        let y = this.yRange
        ctx.arc(x, y, 10, 0, Math.PI * 2, true)
        ctx.fillText("You are here", x + 10, y)
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
        this._CONTEXT.fillStyle = "#3e3e3e";
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


}
