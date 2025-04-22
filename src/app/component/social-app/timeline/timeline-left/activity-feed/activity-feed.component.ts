import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/social-media/social-media-data';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-activity-feed',
    imports: [CommonModule, NgbModule],
    templateUrl: './activity-feed.component.html',
    styleUrls: ['./activity-feed.component.scss']
})
export class ActivityFeedComponent {

  public isCollapsed = false;
  public activityFeedData = data.activityFeedData;

}
