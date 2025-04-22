import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-default-range-slider',
    imports: [CommonModule, NgxSliderModule],
    templateUrl: './default-range-slider.component.html',
    styleUrls: ['./default-range-slider.component.scss']
})
export class DefaultRangeSliderComponent {

  public value: number = 550;

  options: Options = {
    floor: 100,
    ceil: 1000
  };

}
