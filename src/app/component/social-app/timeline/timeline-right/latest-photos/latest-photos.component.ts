import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/social-media/social-media-data';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-latest-photos',
    imports: [CommonModule, NgbModule],
    templateUrl: './latest-photos.component.html',
    styleUrls: ['./latest-photos.component.scss']
})
export class LatestPhotosComponent {

  public latestPhotosData = data.latestPhotos;

}
