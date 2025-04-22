import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserDefaultsComponent } from './browser-defaults/browser-defaults.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { TooltipValidationComponent } from './tooltip-validation/tooltip-validation.component';

@Component({
    selector: 'app-validation-form',
    imports: [CommonModule, BrowserDefaultsComponent, FormValidationComponent, TooltipValidationComponent],
    templateUrl: './validation-form.component.html',
    styleUrls: ['./validation-form.component.scss']
})
export class ValidationFormComponent {

}
