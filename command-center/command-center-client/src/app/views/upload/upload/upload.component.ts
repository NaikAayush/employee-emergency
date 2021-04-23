import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService} from 'src/app/services/api.service';

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
    private imgUrl: string = "";
    private rect!: DOMRect;

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
    }

    getMousePos(evt: MouseEvent): [number, number] {
        let rect = this.rect;
        let canvas = this.mapCanvas.nativeElement;
        if (rect === undefined) {
            return [0, 0]
        } else {
            let x = (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
            let y = (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
            console.log(x, y);
            return [x, y];
        }
    }

    handleFileInput(target: any) {
        let files: FileList = target.files as FileList

        let file = files[0];
        console.log(file);

        let formData = new FormData();
        formData.append("file", file);

        this.api.post("/map/processImage", formData).then(
            (res: Blob) => {
                console.log(res)
                let imgUrl = URL.createObjectURL(res);
                this.imgUrl = imgUrl;

                let img = new Image();
                img.src = this.imgUrl;
                img.onload = () => {
                    this.mapCanvas.nativeElement.width = img.width;
                    this.mapCanvas.nativeElement.height = img.height;
                    this.context.drawImage(img, 0, 0);

                    this.rect = this.mapCanvas.nativeElement.getBoundingClientRect();
                }
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
