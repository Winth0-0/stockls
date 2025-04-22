import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-blog-add-post',
    imports: [CommonModule, AngularEditorModule, FormsModule, DropzoneModule, NgSelectModule],
    templateUrl: './blog-add-post.component.html',
    styleUrls: ['./blog-add-post.component.scss']
})
export class BlogAddPostComponent {

  public htmlContent = '';
  public selectedCityIds: string[] = [];
  public selectedCityId: number = 0;
  public selectedUserIds: number[] = [];

  public config: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    addRemoveLinks: true,
    parallelUploads: 1,
  };

  public cities2 = [
    { id: 1, name: 'LifeStyle' },
    { id: 2, name: 'Travel' },
  ];

}
