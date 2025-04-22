import { Component } from '@angular/core';
import { basicTimeline } from '../../../../shared/data/bonus-ui/timeline';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-basic-timeline',
    imports: [CommonModule],
    templateUrl: './basic-timeline.component.html',
    styleUrls: ['./basic-timeline.component.scss']
})
export class BasicTimelineComponent {

  public basictimelineData = basicTimeline;

}
