import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DateFormatComponent } from './date-format/date-format.component';
import { TimeFormatComponent } from './time-format/time-format.component';
import { DafaultInputMaskComponent } from './dafault-input-mask/dafault-input-mask.component';

@Component({
    selector: 'app-input-mask',
    imports: [CommonModule, TimeFormatComponent, DateFormatComponent, DafaultInputMaskComponent],
    templateUrl: './input-mask.component.html',
    styleUrls: ['./input-mask.component.scss']
})
export class InputMaskComponent {

}
