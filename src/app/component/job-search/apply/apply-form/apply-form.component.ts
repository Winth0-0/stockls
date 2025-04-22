import { Component } from '@angular/core';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { YourExprienceComponent } from './your-exprience/your-exprience.component';
import { YourEducationComponent } from './your-education/your-education.component';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-apply-form',
    imports: [CommonModule, PersonalDetailsComponent, UploadFilesComponent, YourExprienceComponent, YourEducationComponent],
    templateUrl: './apply-form.component.html',
    styleUrls: ['./apply-form.component.scss']
})
export class ApplyFormComponent {

}
