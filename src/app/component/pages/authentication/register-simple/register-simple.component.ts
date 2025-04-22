import { Component } from '@angular/core';
import { CommonRegisterFormComponent } from '../common-register-form/common-register-form.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-register-simple',
    imports: [CommonModule, RouterModule, CommonRegisterFormComponent],
    templateUrl: './register-simple.component.html',
    styleUrls: ['./register-simple.component.scss']
})
export class RegisterSimpleComponent {

}
