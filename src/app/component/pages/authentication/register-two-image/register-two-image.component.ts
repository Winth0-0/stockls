import { Component } from '@angular/core';
import { CommonRegisterFormComponent } from '../common-register-form/common-register-form.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-register-two-image',
    imports: [CommonModule, RouterModule, CommonRegisterFormComponent],
    templateUrl: './register-two-image.component.html',
    styleUrls: ['./register-two-image.component.scss']
})
export class RegisterTwoImageComponent {

}
