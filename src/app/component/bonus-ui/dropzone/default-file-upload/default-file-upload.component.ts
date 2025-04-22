import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropzoneConfigInterface, DropzoneModule } from "ngx-dropzone-wrapper";


@Component({
    selector: 'app-default-file-upload',
    imports: [CommonModule, DropzoneModule],
    templateUrl: './default-file-upload.component.html',
    styleUrls: ['./default-file-upload.component.scss']
})
export class DefaultFileUploadComponent {
  
  public config: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    addRemoveLinks: true
  };
  public text =' <div class="dz-message needsclick"><i class="icon-cloud-up"></i><p>Drop files here or click to upload.</p></div>';
 
  onUploadError(args: DropzoneConfigInterface): void {
  
  }

  onUploadSuccess(args: DropzoneConfigInterface): void {

  }
}
