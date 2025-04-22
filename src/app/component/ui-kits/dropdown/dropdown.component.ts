import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlignmentsDropdownComponent } from './alignments-dropdown/alignments-dropdown.component';
import { BasicDropdownComponent } from './basic-dropdown/basic-dropdown.component';
import { DarkDropdownComponent } from './dark-dropdown/dark-dropdown.component';
import { DividerDropdownComponent } from './divider-dropdown/divider-dropdown.component';
import { HeadingDropdownComponent } from './heading-dropdown/heading-dropdown.component';
import { HelperCardDropdownComponent } from './helper-card-dropdown/helper-card-dropdown.component';
import { InputTypeDropdownComponent } from './input-type-dropdown/input-type-dropdown.component';
import { JustifyContentsDropdownComponent } from './justify-contents-dropdown/justify-contents-dropdown.component';
import { RoundedDropdownComponent } from './rounded-dropdown/rounded-dropdown.component';
import { SizingDropdownComponent } from './sizing-dropdown/sizing-dropdown.component';
import { SplitDropdownComponent } from './split-dropdown/split-dropdown.component';
import { UniqueDropdownComponent } from './unique-dropdown/unique-dropdown.component';

@Component({
    selector: 'app-dropdown',
    imports: [CommonModule, AlignmentsDropdownComponent, BasicDropdownComponent, DarkDropdownComponent, DividerDropdownComponent,
        HeadingDropdownComponent, HelperCardDropdownComponent, InputTypeDropdownComponent, JustifyContentsDropdownComponent,
        RoundedDropdownComponent, SizingDropdownComponent, SplitDropdownComponent, UniqueDropdownComponent],
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

}
