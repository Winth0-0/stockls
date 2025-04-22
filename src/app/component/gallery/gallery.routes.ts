import { Routes } from '@angular/router';
import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';
import { GalleryGridDescComponent } from './gallery-grid-desc/gallery-grid-desc.component';
import { HoverEffectsComponent } from './hover-effects/hover-effects.component'
import { MasonryGalleryComponent } from './masonry-gallery/masonry-gallery.component';
import { MasonryWithDesComponent } from './masonry-with-des/masonry-with-des.component';


export const Gallery: Routes = [
    {
        path: '',
        children: [
            {
                path: 'gallary-grid',
                component: GalleryGridComponent,
                data: {
                    title: "Gallery",
                    breadcrumb: "Gallery",
                }
            },
            {
                path: 'gallery-grid-desc',
                component: GalleryGridDescComponent,
                data: {
                    title: "Gallery Grid Desc",
                    breadcrumb: "Gallery Grid Desc",
                }
            },
            {
                path: 'masonry-gallery',
                component:MasonryGalleryComponent,
                data: {
                    title: "Masonry Gallery",
                    breadcrumb: "Masonry Gallery",
                }
            },
            {
                path: 'masonry-with-desc',
                component: MasonryWithDesComponent,
                data: {
                    title: "Masonry Gallery With Description",
                    breadcrumb: "Masonry Gallery With Description",
                }
            },
            {
                path: 'hover-effects',
                component:HoverEffectsComponent,
                data: {
                    title: "Image Hover Effects",
                    breadcrumb: "Image Hover Effects",
                }
            },
        ],
    }
]