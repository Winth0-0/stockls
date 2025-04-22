import { Component } from '@angular/core';
import { jobDetail } from '../../../shared/data/job-search/job-search';
import { CommonModule } from '@angular/common';
import { JobSimilerComponent } from './job-similer/job-similer.component';
import { JobFilterComponent } from '../job-filter/job-filter.component';

@Component({
    selector: 'app-job-details',
    imports: [CommonModule, JobSimilerComponent, JobFilterComponent],
    templateUrl: './job-details.component.html',
    styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent {

  public jobDetail = jobDetail;


}
