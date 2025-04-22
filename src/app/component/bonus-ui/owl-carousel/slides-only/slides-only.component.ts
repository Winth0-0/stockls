import { Component } from '@angular/core';
import { sildesOnly, sildesOptions } from '../../../../shared/data/bonus-ui/owl-carousel';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-slides-only',
    imports: [CommonModule, CarouselModule],
    templateUrl: './slides-only.component.html',
    styleUrls: ['./slides-only.component.scss']
})
export class SlidesOnlyComponent {

  public sildesData = sildesOnly;
  public slidesopdtionData = sildesOptions;

}
