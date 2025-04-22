import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropzoneConfigInterface, DropzoneModule } from "ngx-dropzone-wrapper";

@Component({
    selector: 'app-single-file-upload',
    imports: [CommonModule, DropzoneModule],
    templateUrl: './single-file-upload.component.html',
    styleUrls: ['./single-file-upload.component.scss']
})
export class SingleFileUploadComponent {

  public config: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    clickable: true,
    uploadMultiple:false,
    maxFiles: 1,
    addRemoveLinks: true,
  };

  public text =' <div class="dz-message needsclick"><i class="icon-cloud-up"></i><p>Drop files here or click to upload.</p></div>';

  onUploadError(args: DropzoneConfigInterface): void {
  
  }

  onUploadSuccess(args: DropzoneConfigInterface): void {

  }
}
