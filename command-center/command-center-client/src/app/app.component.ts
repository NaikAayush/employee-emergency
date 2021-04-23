import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'command-center';
    fileToUpload: File | undefined = undefined;

    handleFileInput(target: any) {
        let files: FileList = target.files as FileList

        let file = files[0];
        console.log(file);

        // TODO: upload to quart server
        // TODO: show in canvas
        // TODO: put markers on canvas
        // TODO: aaaaaaaaaaaaaa
    }
}
