import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonLoginFormComponent } from '../common-login-form/common-login-form.component';

@Component({
    selector: 'app-login-sweetalert',
    imports: [CommonModule, RouterModule, CommonLoginFormComponent],
    templateUrl: './login-sweetalert.component.html',
    styleUrls: ['./login-sweetalert.component.scss']
})
export class LoginSweetalertComponent {

}
