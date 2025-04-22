import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonLoginFormComponent } from '../common-login-form/common-login-form.component';

@Component({
    selector: 'app-login-validation',
    imports: [CommonModule, RouterModule, CommonLoginFormComponent],
    templateUrl: './login-validation.component.html',
    styleUrls: ['./login-validation.component.scss']
})
export class LoginValidationComponent {

}
