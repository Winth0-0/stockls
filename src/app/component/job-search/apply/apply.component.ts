import { Component } from '@angular/core';
import { ApplyFormComponent } from './apply-form/apply-form.component';
import { JobFilterComponent } from '../job-filter/job-filter.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-apply',
    imports: [CommonModule, JobFilterComponent, ApplyFormComponent],
    templateUrl: './apply.component.html',
    styleUrls: ['./apply.component.scss']
})
export class ApplyComponent {

}
