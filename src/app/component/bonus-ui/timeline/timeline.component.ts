import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BasicTimelineComponent } from './basic-timeline/basic-timeline.component';
import { HoveringTimelineComponent } from './hovering-timeline/hovering-timeline.component';
import { TimelineChartComponent } from './timeline-chart/timeline-chart.component';
import { VariationTimelineComponent } from './variation-timeline/variation-timeline.component';
import { HorizontalTimelineComponent } from './horizontal-timeline/horizontal-timeline.component';

@Component({
    selector: 'app-timeline',
    imports: [CommonModule, BasicTimelineComponent, HoveringTimelineComponent, TimelineChartComponent, VariationTimelineComponent,
        HorizontalTimelineComponent],
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

}
