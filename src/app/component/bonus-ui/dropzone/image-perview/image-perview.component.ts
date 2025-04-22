import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropzoneConfigInterface, DropzoneModule } from "ngx-dropzone-wrapper";

@Component({
    selector: 'app-image-perview',
    imports: [CommonModule, DropzoneModule],
    templateUrl: './image-perview.component.html',
    styleUrls: ['./image-perview.component.scss']
})
export class ImagePerviewComponent {
  
  public config: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    acceptedFiles: 'image/*',
    addRemoveLinks: true,
  };

  public text =' <div class="dz-message needsclick"><i class="icon-cloud-up"></i><p>Drop files here or click to upload.</p></div>';

  onUploadError(args: DropzoneConfigInterface): void {
  
  }

  onUploadSuccess(args: DropzoneConfigInterface): void {

  }
  
}
