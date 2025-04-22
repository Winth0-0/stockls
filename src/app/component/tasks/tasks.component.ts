import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskSidemenuComponent } from './task-sidemenu/task-sidemenu.component';

@Component({
    selector: 'app-tasks',
    imports: [CommonModule, TaskSidemenuComponent],
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

}
