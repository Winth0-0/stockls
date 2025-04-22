import { Component } from '@angular/core';
import * as Data from '../../../shared/data/gallery/hover';
import { LightboxModule } from 'ng-gallery/lightbox';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-hover-effects',
    imports: [CommonModule, LightboxModule],
    templateUrl: './hover-effects.component.html',
    styleUrl: './hover-effects.component.scss'
})
export class HoverEffectsComponent {

  public imgData = Data.imgData;
  public hoverData = Data.hoverData;

}
