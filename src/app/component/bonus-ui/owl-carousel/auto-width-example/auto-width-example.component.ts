import { Component } from '@angular/core';
import { commonImg, autoWidthoption } from '../../../../shared/data/bonus-ui/owl-carousel';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-auto-width-example',
    imports: [CommonModule, CarouselModule],
    templateUrl: './auto-width-example.component.html',
    styleUrls: ['./auto-width-example.component.scss']
})
export class AutoWidthExampleComponent {

  public widthData = commonImg;
  public autowidhtoptionsData = autoWidthoption;

}
