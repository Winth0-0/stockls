import { Component } from '@angular/core';
import { center, owlcarousel1ptions } from '../../../../shared/data/bonus-ui/owl-carousel';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-center-example',
    imports: [CommonModule, CarouselModule],
    templateUrl: './center-example.component.html',
    styleUrls: ['./center-example.component.scss']
})
export class CenterExampleComponent {

  public centerData = center;
  public centeroptions = owlcarousel1ptions;

}
