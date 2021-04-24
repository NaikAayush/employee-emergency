import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService} from 'src/app/services/api.service';

class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

    title = 'command-center';

    @ViewChild('mapCanvas', {static: false})
    private mapCanvas!: ElementRef<HTMLCanvasElement>;

    private context!: CanvasRenderingContext2D;
    private rect!: DOMRect;
    private origImg!: HTMLImageElement;
    private mapImg!: HTMLImageElement;
    private markerLocs: any = {};
    public markerChoice: string = "exit";

    // icons
    private exitIcon!: HTMLImageElement;

    constructor(public api: ApiService) {}

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        let context = this.mapCanvas.nativeElement.getContext('2d');
        if (context === null) {
            console.log("Error in canvas initialization. AAAAAA");
        } else {
            this.context = context;
        }

        this.exitIcon = new Image();
        this.exitIcon.src = "assets/img/exit.svg";
    }

    private getMousePos(evt: MouseEvent): Point {
        let rect = this.rect;
        let canvas = this.mapCanvas.nativeElement;
        if (rect === undefined) {
            return new Point(0, 0);
        } else {
            // let x = (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
            // let y = (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
            // return new Point(x, y);

            const rect = canvas.getBoundingClientRect(), // abs. size of element
                scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for X
                scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y
            const px = (evt.clientX - rect.left) * scaleX;
            const py = (evt.clientY - rect.top) * scaleY;

            const matrix = this.context.getTransform();
            const imatrix = matrix.invertSelf();
            const x = px * imatrix.a + py * imatrix.c + imatrix.e;
            const y = px * imatrix.b + py * imatrix.d + imatrix.f;

            return new Point(x, y);
        }
    }

    handleMouseClick(evt: MouseEvent): void {
        let pos = this.getMousePos(evt);

        console.log(this.markerLocs);
        if (this.markerLocs[this.markerChoice] === undefined) {
            this.markerLocs[this.markerChoice] = [];
        }
        this.markerLocs[this.markerChoice].push(pos);

        console.log(pos.x, pos.y, this.markerChoice);

        const iconSize = 20;
        this.context.drawImage(this.exitIcon, pos.x - iconSize / 2, pos.y - iconSize / 2, iconSize, iconSize);
    }

    handleFileInput(target: any) {
        let files: FileList = target.files as FileList

        let file = files[0];
        console.log(file);

        let formData = new FormData();
        formData.append("file", file);

        this.api.post("/map/processImage", formData).then(
            (res: any) => {
                let orig_img = new Image();
                orig_img.src = "data:image/jpg;base64," + res.orig_img;

                orig_img.onload = () => {
                    this.mapCanvas.nativeElement.width = orig_img.width;
                    this.mapCanvas.nativeElement.height = orig_img.height;
                    this.context.drawImage(orig_img, 0, 0);

                    this.rect = this.mapCanvas.nativeElement.getBoundingClientRect();
                }

                let map_img = new Image();
                map_img.src = "data:image/jpg;base64," + res.map_img;

                this.origImg = orig_img;
                this.mapImg = map_img;
            }
        ).catch(
            err => {
                console.log("error in upload image", err)
            }
        )
        // TODO: upload to quart server
        // TODO: show in canvas
        // TODO: put markers on canvas
        // TODO: aaaaaaaaaaaaaa
    }

}
