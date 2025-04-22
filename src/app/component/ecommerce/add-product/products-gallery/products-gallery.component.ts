import { CommonModule } from '@angular/common';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

@Component({
    selector: 'app-products-gallery',
    imports: [DropzoneModule, CommonModule, ReactiveFormsModule, FormsModule],
    templateUrl: './products-gallery.component.html',
    styleUrls: ['./products-gallery.component.scss']
})
export class ProductsGalleryComponent {

  public activeStep: number = 2;

  public text =' <div class="dz-message needsclick"><i class="icon-cloud-up"></i><p>Drop files here or click to upload.</p></div>';

  @Output() activeSteps = new EventEmitter<number>();

  constructor(private fb: FormBuilder) {}


  myForm = new FormGroup({
  });

  next(myForm: FormGroup) {
    const number = this.activeStep + 1;
    this.activeSteps.emit(number);
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }

  public config: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    addRemoveLinks: true,
    parallelUploads: 1,
  };

  public config2: DropzoneConfigInterface = {
    acceptedFiles: "image/*,gif",
    url: 'https://httpbin.org/post',
    addRemoveLinks: true
  };


  onUploadError(args: DropzoneConfigInterface): void { }

  onUploadSuccess(args: DropzoneConfigInterface): void { }

  validationError: string | null = null;

  onFileDrop(event: any) {
    const files: File[] = event.addedFiles;
    // Check if any files were dropped
    if (files.length === 0) {
      this.validationError = 'No files were dropped.';
      return;
    }

    // Check file length
    if (files.length > 1) {
      this.validationError = 'Only one file is allowed.';
      return;
    }

    // Check file type (image)
    const file = files[0];
    if (!file.type.startsWith('image/')) {
      this.validationError = 'Only image files are allowed.';
      return;
    }

    // If all validations pass, reset validation error
    this.validationError = null;

    // Proceed with your logic for handling the valid image file
  }

}
