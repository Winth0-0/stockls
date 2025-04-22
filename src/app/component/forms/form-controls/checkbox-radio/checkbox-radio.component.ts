import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimatedButtonsComponent } from './animated-buttons/animated-buttons.component';
import { BasicRadioCheckboxComponent } from './basic-radio-checkbox/basic-radio-checkbox.component';
import { CustomRadioComponent } from './custom-radio/custom-radio.component';
import { CustomCheckboxComponent } from './custom-checkbox/custom-checkbox.component';
import { DefaultCheckboxComponent } from './default-checkbox/default-checkbox.component';
import { DefaultRadioComponent } from './default-radio/default-radio.component';
import { DefaultSwitchesComponent } from './default-switches/default-switches.component';
import { ImagesCheckboxComponent } from './images-checkbox/images-checkbox.component';
import { ImagesRadioComponent } from './images-radio/images-radio.component';
import { InlineInputTypesComponent } from './inline-input-types/inline-input-types.component';
import { OutlinedCheckboxStylesComponent } from './outlined-checkbox-styles/outlined-checkbox-styles.component';
import { RadioToggleButtonsComponent } from './radio-toggle-buttons/radio-toggle-buttons.component';

@Component({
    selector: 'app-checkbox-radio',
    imports: [CommonModule, AnimatedButtonsComponent, BasicRadioCheckboxComponent, CustomRadioComponent,
        CustomCheckboxComponent, DefaultCheckboxComponent, DefaultRadioComponent, DefaultSwitchesComponent, ImagesCheckboxComponent, ImagesRadioComponent,
        InlineInputTypesComponent, OutlinedCheckboxStylesComponent, RadioToggleButtonsComponent],
    templateUrl: './checkbox-radio.component.html',
    styleUrls: ['./checkbox-radio.component.scss']
})
export class CheckboxRadioComponent {

}
