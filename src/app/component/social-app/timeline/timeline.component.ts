import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineCenterComponent } from './timeline-center/timeline-center.component';
import { TimelineRightComponent } from './timeline-right/timeline-right.component';
import { TimelineLeftComponent } from './timeline-left/timeline-left.component';

@Component({
    selector: 'app-timeline',
    imports: [CommonModule, TimelineCenterComponent, TimelineRightComponent, TimelineLeftComponent],
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

}
