import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { AudioTestingComponent } from './audio-testing/audio-testing.component';
import { MeetUpComponent } from './meet-up/meet-up.component';
import { ResolutionsComponent } from './resolutions/resolutions.component';

@Component({
    selector: 'app-timeline-chart',
    imports: [CommonModule, AudioTestingComponent, MeetUpComponent, ResolutionsComponent, CarouselModule],
    templateUrl: './timeline-chart.component.html',
    styleUrls: ['./timeline-chart.component.scss']
})
export class TimelineChartComponent {

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    dots: false,
    nav: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
  }

}
