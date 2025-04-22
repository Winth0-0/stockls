import { Component } from '@angular/core';
import { galleryGridData } from '../../../shared/data/gallery/gallery-grid';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule, Lightbox } from 'ng-gallery/lightbox';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-gallery-grid',
    imports: [CommonModule, LightboxModule, GalleryModule],
    templateUrl: './gallery-grid.component.html',
    styleUrl: './gallery-grid.component.scss'
})
export class GalleryGridComponent {

  public galleryGridData = galleryGridData;
  public items: GalleryItem[];

  constructor(public gallery: Gallery, public lightbox: Lightbox) { }

  ngOnInit() {

    this.items = this.galleryGridData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    lightboxRef.load(this.items)
  }

}
