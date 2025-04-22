import { Component } from '@angular/core';
import { commonImg, RightToLeftoptions } from '../../../../shared/data/bonus-ui/owl-carousel';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-right-left-example',
    imports: [CommonModule, CarouselModule],
    templateUrl: './right-left-example.component.html',
    styleUrls: ['./right-left-example.component.scss']
})
export class RightLeftExampleComponent {

  public rightLeftData = commonImg;
  public rightleftoptions = RightToLeftoptions;

}
