import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonLoginFormComponent } from '../common-login-form/common-login-form.component';

@Component({
    selector: 'app-login-simple',
    imports: [CommonModule, RouterModule, CommonLoginFormComponent],
    templateUrl: './login-simple.component.html',
    styleUrls: ['./login-simple.component.scss']
})
export class LoginSimpleComponent {

}
