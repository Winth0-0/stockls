import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { upcomingCourse } from '../../../../shared/data/learning/learning';
import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-upcoming-cource',
    imports: [CommonModule, NgbModule],
    templateUrl: './upcoming-cource.component.html',
    styleUrls: ['./upcoming-cource.component.scss']
})
export class UpcomingCourceComponent {

  public upcomingCourse = upcomingCourse;
  public isCollapsed = false;

  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

}
