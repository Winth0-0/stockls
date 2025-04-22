import { Component } from '@angular/core';
import * as fileData from '../../../shared/data/file-manager/file-manager';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-file-item',
    imports: [CommonModule],
    templateUrl: './file-item.component.html',
    styleUrls: ['./file-item.component.scss']
})
export class FileItemComponent {

  public active = 1;
  public Quickdata = fileData.Quickdata
  public FoldersData = fileData.FoldersData
  public FilesData = fileData.FilesData

}
