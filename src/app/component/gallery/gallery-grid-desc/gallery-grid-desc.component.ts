import { Component } from '@angular/core';
import { gallerydes } from '../../../shared/data/gallery/gallery-grid';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-gallery-grid-desc',
    imports: [CommonModule, LightboxModule, GalleryModule],
    templateUrl: './gallery-grid-desc.component.html',
    styleUrl: './gallery-grid-desc.component.scss'
})
export class GalleryGridDescComponent {


  public galleryGrid = gallerydes;
  public items: GalleryItem[];

  constructor(public gallery: Gallery, public lightbox: Lightbox) { }

  ngOnInit() {

    this.items = this.galleryGrid.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    lightboxRef.load(this.items)
  }

}
