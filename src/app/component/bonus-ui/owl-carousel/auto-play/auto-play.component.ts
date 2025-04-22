import { Component } from '@angular/core';
import { autoPlayVariant, autovariantOption } from '../../../../shared/data/bonus-ui/owl-carousel';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-auto-play',
    imports: [CommonModule, CarouselModule],
    templateUrl: './auto-play.component.html',
    styleUrls: ['./auto-play.component.scss']
})
export class AutoPlayComponent {

  public autovariantoptionsData = autovariantOption;
  public autoVariantData = autoPlayVariant;

}
