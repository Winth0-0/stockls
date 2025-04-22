import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CheckboxButtonGroupComponent } from './checkbox-button-group/checkbox-button-group.component';
import { CommonButtonGorupComponent } from './common-button-gorup/common-button-gorup.component';
import { NestingComponent } from './nesting/nesting.component';
import { OutlineCustomButtonGroupComponent } from './outline-custom-button-group/outline-custom-button-group.component';
import { OutlineCustomButtonGroup2Component } from './outline-custom-button-group2/outline-custom-button-group2.component';
import { RadioButtonGroupComponent } from './radio-button-group/radio-button-group.component';
import { VerticalComponent } from './vertical/vertical.component';
import { CommonOutlineButtonComponent } from './common-outline-button/common-outline-button.component';

@Component({
    selector: 'app-button-group',
    imports: [CommonModule, CheckboxButtonGroupComponent, CommonButtonGorupComponent, NestingComponent, CommonOutlineButtonComponent,
        OutlineCustomButtonGroupComponent, OutlineCustomButtonGroup2Component, RadioButtonGroupComponent, VerticalComponent],
    templateUrl: './button-group.component.html',
    styleUrls: ['./button-group.component.scss']
})
export class ButtonGroupComponent {

}
