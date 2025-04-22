import { Component } from '@angular/core';
import { projectData } from '../../../../shared/data/user/users-edit';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-add-projects-upload',
    imports: [CommonModule],
    templateUrl: './add-projects-upload.component.html',
    styleUrls: ['./add-projects-upload.component.scss']
})
export class AddProjectsUploadComponent {

  public projectitem = projectData;

}
