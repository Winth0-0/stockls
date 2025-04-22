import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonLoginFormComponent } from '../common-login-form/common-login-form.component';

@Component({
    selector: 'app-login-bg-image',
    imports: [CommonModule, RouterModule, CommonLoginFormComponent],
    templateUrl: './login-bg-image.component.html',
    styleUrls: ['./login-bg-image.component.scss']
})
export class LoginBgImageComponent {

}
