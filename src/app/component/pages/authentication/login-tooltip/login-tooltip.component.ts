import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonLoginFormComponent } from '../common-login-form/common-login-form.component';

@Component({
    selector: 'app-login-tooltip',
    imports: [CommonModule, RouterModule, CommonLoginFormComponent],
    templateUrl: './login-tooltip.component.html',
    styleUrls: ['./login-tooltip.component.scss']
})
export class LoginTooltipComponent {

}
