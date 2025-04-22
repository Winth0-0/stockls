import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineLeftComponent } from '../timeline/timeline-left/timeline-left.component';
import { TimelineRightComponent } from '../timeline/timeline-right/timeline-right.component';
import { AboutCenterComponent } from './about-center/about-center.component';


@Component({
    selector: 'app-about',
    imports: [CommonModule, TimelineLeftComponent, TimelineRightComponent, AboutCenterComponent],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {

}
