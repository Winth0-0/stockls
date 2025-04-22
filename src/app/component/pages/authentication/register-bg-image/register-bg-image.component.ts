import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonRegisterFormComponent } from '../common-register-form/common-register-form.component';

@Component({
    selector: 'app-register-bg-image',
    imports: [CommonModule, RouterModule, CommonRegisterFormComponent],
    templateUrl: './register-bg-image.component.html',
    styleUrls: ['./register-bg-image.component.scss']
})
export class RegisterBgImageComponent {

}
