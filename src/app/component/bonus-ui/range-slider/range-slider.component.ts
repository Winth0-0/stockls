import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomValuesComponent } from './custom-values/custom-values.component';
import { DefaultRangeSliderComponent } from './default-range-slider/default-range-slider.component';
import { DisabledComponent } from './disabled/disabled.component';
import { PrettifyNumberComponent } from './prettify-number/prettify-number.component';
import { MinMaxSliderComponent } from './min-max-slider/min-max-slider.component';

@Component({
    selector: 'app-range-slider',
    imports: [CommonModule, CustomValuesComponent, DefaultRangeSliderComponent, DisabledComponent, PrettifyNumberComponent, MinMaxSliderComponent],
    templateUrl: './range-slider.component.html',
    styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent {

}
