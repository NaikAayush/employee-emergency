import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService} from 'src/app/services/api.service';
import {fabric} from 'fabric';

class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface ChoiceInfo {
    iconEl: HTMLImageElement,
    iconSrc: string
}

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

    title = 'command-center';

    private canvas!: fabric.Canvas;

    // private contextF!: CanvasRenderingContext2D;
    private origImg!: HTMLImageElement;
    private mapImg!: HTMLImageElement;
    // private markerLocs: any = {};
    public markerChoice: string = "exit";

    // icons
    private exitIcon!: HTMLImageElement;
    private entryIcon!: HTMLImageElement;
    private beaconIcon!: HTMLImageElement;

    // choices, so many choices
    private choicesInfo: Record<string, ChoiceInfo> = {
        "exit": {
            "iconEl": this.exitIcon,
            "iconSrc": "assets/img/exit.svg"
        },
        "entry": {
            "iconEl": this.entryIcon,
            "iconSrc": "assets/img/entry.svg"
        },
        "beacon": {
            "iconEl": this.beaconIcon,
            "iconSrc": "assets/img/beacon.svg"
        }
    };
    // for use in ngFor ig
    private choices = ["exit", "entry", "beacon"];

    constructor(public api: ApiService) {}

    ngOnInit(): void {
        this.canvas = new fabric.Canvas("mapFabricCanvas");
        this.canvas.selection = false;
        this.canvas.on("mouse:down", (e: fabric.IEvent) => {
            if (e.pointer === undefined) {
                console.log("aaaaa undefined");
            } else {
                console.log(e.pointer.x, e.pointer.y, this.markerChoice);

                const iconSize = 20;
                let x = e.pointer.x - iconSize / 2;
                let y = e.pointer.y - iconSize / 2;
                let intersects = false;
                let intObject: fabric.Object | null = null;

                this.canvas.getObjects('image').some(obj => {
                    let inter = obj.intersectsWithRect(
                        new fabric.Point(x, y),
                        new fabric.Point(x + iconSize, y + iconSize)
                    );
                    if (inter) {
                        intersects = true;
                        intObject = obj;
                        return true;
                    }
                    return false;
                });

                if (intersects && intObject !== null) {
                    this.canvas.remove(intObject);
                } else {
                    let iconImg = new fabric.Image(this.choicesInfo[this.markerChoice].iconEl, {
                        left: x,
                        top: y,
                        selectable: false,
                        width: iconSize,
                        height: iconSize
                    });
                    this.canvas.add(iconImg);
                }
            }

        });
    }

    ngAfterViewInit(): void {
        this.canvas.height = 0;
        this.canvas.width = 0;

        this.exitIcon = new Image();
        this.exitIcon.src = "assets/img/exit.svg";

        this.choices.forEach((choice: string) => {
            let choiceInfo = this.choicesInfo[choice];
            choiceInfo.iconEl = new Image();
            choiceInfo.iconEl.src = choiceInfo.iconSrc;
        });
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
                    this.canvas.setWidth(orig_img.width);
                    // this.canvas.height = orig_img.height;
                    this.canvas.setHeight(orig_img.height);
                    // this.canvas.width = orig_img.width;
                    this.canvas.setDimensions({
                        width: '100%',
                        height: ''
                    }, {
                        cssOnly: true
                    });
                    this.canvas.hoverCursor = 'pointer';

                    let orig_img_f = new fabric.Image(orig_img, {left: 0, top: 0, lockMovementX: true, lockMovementY: true, lockScalingX: true, selectable: false});
                    this.canvas.add(orig_img_f);
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
        // TODO: aaaaaaaaaaaaaa
    }

}
