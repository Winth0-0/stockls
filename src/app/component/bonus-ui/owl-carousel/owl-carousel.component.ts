import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AutoHeightExampleComponent } from './auto-height-example/auto-height-example.component';
import { AutoPlayComponent } from './auto-play/auto-play.component';
import { AutoWidthExampleComponent } from './auto-width-example/auto-width-example.component';
import { CenterExampleComponent } from './center-example/center-example.component';
import { CrossFadeComponent } from './cross-fade/cross-fade.component';
import { LazyLoadExampleComponent } from './lazy-load-example/lazy-load-example.component';
import { ResponsiveExampleComponent } from './responsive-example/responsive-example.component';
import { RightLeftExampleComponent } from './right-left-example/right-left-example.component';
import { SlidesOnlyComponent } from './slides-only/slides-only.component';


@Component({
    selector: 'app-owl-carousel',
    imports: [CommonModule, AutoHeightExampleComponent, AutoPlayComponent, AutoWidthExampleComponent, CenterExampleComponent,
        CrossFadeComponent, LazyLoadExampleComponent, ResponsiveExampleComponent, RightLeftExampleComponent, SlidesOnlyComponent],
    templateUrl: './owl-carousel.component.html',
    styleUrls: ['./owl-carousel.component.scss']
})
export class OwlCarouselComponent {



}
