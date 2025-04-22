import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropzoneConfigInterface, DropzoneModule } from "ngx-dropzone-wrapper";

@Component({
    selector: 'app-multi-file-upload',
    imports: [CommonModule, DropzoneModule],
    templateUrl: './multi-file-upload.component.html',
    styleUrls: ['./multi-file-upload.component.scss']
})
export class MultiFileUploadComponent {

  public config: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    uploadMultiple: true,
    addRemoveLinks: true,
  };

  public text =' <div class="dz-message needsclick"><i class="icon-cloud-up"></i><p>Drop files here or click to upload.</p></div>';

  onUploadError(args: DropzoneConfigInterface): void {
  
  }

  onUploadSuccess(args: DropzoneConfigInterface): void {

  }

}
