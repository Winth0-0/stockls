import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
    selector: 'app-min-max-slider',
    imports: [CommonModule, NgxSliderModule],
    templateUrl: './min-max-slider.component.html',
    styleUrls: ['./min-max-slider.component.scss']
})
export class MinMaxSliderComponent {

  public value2: number = 550;
  public maxvalue: number = 100;

  options: Options = {
    floor: 100,
    ceil: 1000
  };

}
