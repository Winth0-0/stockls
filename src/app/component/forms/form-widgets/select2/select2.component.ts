import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DefaultSelect2Component } from './default-select2/default-select2.component';
import { FullColoredVariantComponent } from './full-colored-variant/full-colored-variant.component';
import { OutlineColorVariantComponent } from './outline-color-variant/outline-color-variant.component';

@Component({
    selector: 'app-select2',
    imports: [CommonModule, DefaultSelect2Component, FullColoredVariantComponent, OutlineColorVariantComponent],
    templateUrl: './select2.component.html',
    styleUrls: ['./select2.component.scss']
})
export class Select2Component {

}
