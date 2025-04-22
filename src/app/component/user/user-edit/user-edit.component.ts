import { Component } from '@angular/core';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form.component';
import { AddProjectsUploadComponent } from './add-projects-upload/add-projects-upload.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-user-edit',
    imports: [CommonModule, MyProfileComponent, EditProfileFormComponent, AddProjectsUploadComponent],
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent {

}
