import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BasicInputGroupsComponent } from './basic-input-groups/basic-input-groups.component';
import { ButtonAddonsComponent } from './button-addons/button-addons.component';
import { ButtonsWithDropdownsComponent } from './buttons-with-dropdowns/buttons-with-dropdowns.component';
import { CustomFileInputComponent } from './custom-file-input/custom-file-input.component';
import { CustomFormsComponent } from './custom-forms/custom-forms.component';
import { MultipleInputsComponent } from './multiple-inputs/multiple-inputs.component';
import { SegmentedButtonsComponent } from './segmented-buttons/segmented-buttons.component';
import { SizingComponent } from './sizing/sizing.component';
import { VariationAddonsComponent } from './variation-addons/variation-addons.component';
import { CheckboxesRadiosComponent } from './checkboxes-radios/checkboxes-radios.component';

@Component({
    selector: 'app-input-groups',
    imports: [CommonModule, BasicInputGroupsComponent, ButtonAddonsComponent, ButtonsWithDropdownsComponent, CheckboxesRadiosComponent,
        CustomFileInputComponent, CustomFormsComponent, MultipleInputsComponent, SegmentedButtonsComponent,
        SizingComponent, VariationAddonsComponent],
    templateUrl: './input-groups.component.html',
    styleUrls: ['./input-groups.component.scss']
})
export class InputGroupsComponent {

}
