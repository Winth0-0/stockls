import { Component } from '@angular/core';
import { jobCardsData } from '../../../shared/data/job-search/job-search';
import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { JobFilterComponent } from '../job-filter/job-filter.component';

@Component({
    selector: 'app-list-view',
    imports: [CommonModule, JobFilterComponent, NgbModule],
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent {

  public jobCardsData = jobCardsData;
  public rating = 5;

  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

}
