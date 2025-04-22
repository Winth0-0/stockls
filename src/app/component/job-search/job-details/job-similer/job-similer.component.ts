import { Component } from '@angular/core';
import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { jobCardsData } from '../../../../shared/data/job-search/job-search';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-job-similer',
    imports: [CommonModule, NgbModule],
    templateUrl: './job-similer.component.html',
    styleUrls: ['./job-similer.component.scss']
})
export class JobSimilerComponent {

  public jobCardsData = jobCardsData;
  public rating = 3;

  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

}
