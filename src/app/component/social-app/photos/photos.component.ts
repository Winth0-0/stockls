import { Component } from '@angular/core';
import * as Data from '../../../shared/data/social-media/social-media-data';
import { CommonModule } from '@angular/common';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

@Component({
    selector: 'app-photos',
    imports: [CommonModule, GalleryModule, LightboxModule],
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {

  public photosData = Data.photosData;

}
