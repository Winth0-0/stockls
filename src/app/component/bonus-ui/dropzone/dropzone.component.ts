import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DefaultFileUploadComponent } from './default-file-upload/default-file-upload.component';
import { ImagePerviewComponent } from './image-perview/image-perview.component';
import { MultiFileUploadComponent } from './multi-file-upload/multi-file-upload.component';
import { SingleFileUploadComponent } from './single-file-upload/single-file-upload.component';

@Component({
    selector: 'app-dropzone',
    imports: [CommonModule, DefaultFileUploadComponent, ImagePerviewComponent, MultiFileUploadComponent, SingleFileUploadComponent],
    templateUrl: './dropzone.component.html',
    styleUrls: ['./dropzone.component.scss']
})
export class DropzoneComponent {

}
