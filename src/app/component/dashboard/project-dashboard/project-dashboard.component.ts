import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { AddProjectCardComponent } from './add-project-card/add-project-card.component';
import { AllProjectTableComponent } from './all-project-table/all-project-table.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ImportantProjectListComponent } from './important-project-list/important-project-list.component';
import { MessageComponent } from './message/message.component';
import { ProjectIdeasCardComponent } from './project-ideas-card/project-ideas-card.component';
import { ProjectStatisticsComponent } from './project-statistics/project-statistics.component';
import { TodayWorkComponent } from './today-work/today-work.component';
import { TopClientListComponent } from './top-client-list/top-client-list.component';
import { TopProjectCardComponent } from './top-project-card/top-project-card.component';

@Component({
    selector: 'app-project-dashboard',
    imports: [CommonModule, ActivityLogComponent, AddProjectCardComponent, AllProjectTableComponent, CalendarComponent, ImportantProjectListComponent,
        MessageComponent, ProjectIdeasCardComponent, ProjectStatisticsComponent, TodayWorkComponent, TopClientListComponent, TopProjectCardComponent],
    templateUrl: './project-dashboard.component.html',
    styleUrl: './project-dashboard.component.scss'
})
export class ProjectDashboardComponent {

}
