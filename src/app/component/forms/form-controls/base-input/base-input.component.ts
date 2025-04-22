import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { BasicFloatingInputControlComponent } from './basic-floating-input-control/basic-floating-input-control.component';
import { BasicInputControlComponent } from './basic-input-control/basic-input-control.component';
import { EdgesInputStyleComponent } from './edges-input-style/edges-input-style.component';
import { FileInputComponent } from './file-input/file-input.component';
import { FlatInputStyleComponent } from './flat-input-style/flat-input-style.component';
import { FloatingFormComponent } from './floating-form/floating-form.component';
import { FormControlSizingComponent } from './form-control-sizing/form-control-sizing.component';
import { RaiseInputStyleComponent } from './raise-input-style/raise-input-style.component';
import { SelectSizingComponent } from './select-sizing/select-sizing.component';

@Component({
    selector: 'app-base-input',
    imports: [CommonModule, BasicFormComponent, BasicFloatingInputControlComponent, BasicInputControlComponent, EdgesInputStyleComponent,
        FileInputComponent, FlatInputStyleComponent, FloatingFormComponent, FormControlSizingComponent, RaiseInputStyleComponent,
        SelectSizingComponent],
    templateUrl: './base-input.component.html',
    styleUrls: ['./base-input.component.scss']
})
export class BaseInputComponent {

}
