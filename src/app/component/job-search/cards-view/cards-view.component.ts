import { Component } from '@angular/core';
import { jobCardsData } from '../../../shared/data/job-search/job-search';
import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { JobFilterComponent } from '../job-filter/job-filter.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cards-view',
    imports: [CommonModule, JobFilterComponent, NgbModule],
    templateUrl: './cards-view.component.html',
    styleUrls: ['./cards-view.component.scss']
})
export class CardsViewComponent {


  public jobCardsData = jobCardsData;

  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }


}
