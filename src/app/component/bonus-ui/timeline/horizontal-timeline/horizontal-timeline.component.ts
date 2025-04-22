import { Component } from '@angular/core';
import { horizontalTimeline } from '../../../../shared/data/bonus-ui/timeline';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-horizontal-timeline',
    imports: [CommonModule],
    templateUrl: './horizontal-timeline.component.html',
    styleUrls: ['./horizontal-timeline.component.scss']
})
export class HorizontalTimelineComponent {

  public horizontalTimelineData = horizontalTimeline;

}
