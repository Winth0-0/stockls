import { Component } from '@angular/core';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ProjectCreateFormComponent } from './project-create-form/project-create-form.component';

@Component({
    selector: 'app-create-new',
    imports: [UploadFileComponent, ProjectCreateFormComponent],
    templateUrl: './create-new.component.html',
    styleUrls: ['./create-new.component.scss']
})
export class CreateNewComponent {

}
