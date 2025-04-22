import { Component } from '@angular/core';
import { TeamActivity } from '../../../../shared/data/dashboard/online-course/online-course';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-team-activity',
    imports: [RouterModule],
    templateUrl: './team-activity.component.html',
    styleUrls: ['./team-activity.component.scss']
})
export class TeamActivityComponent {

  public TeamActivityData = TeamActivity;

}
