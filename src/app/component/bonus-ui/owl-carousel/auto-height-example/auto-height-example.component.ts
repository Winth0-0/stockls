import { Component } from '@angular/core';
import { commonImg, autoheigthoptions } from '../../../../shared/data/bonus-ui/owl-carousel';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-auto-height-example',
    imports: [CommonModule, CarouselModule],
    templateUrl: './auto-height-example.component.html',
    styleUrls: ['./auto-height-example.component.scss']
})
export class AutoHeightExampleComponent {

  public heigthData = commonImg;
  public heigthOptionData = autoheigthoptions;

}
