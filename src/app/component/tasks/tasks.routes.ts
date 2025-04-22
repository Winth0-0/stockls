import { Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';

export const Tasks: Routes = [
    {
        path: '',
        component: TasksComponent,
        data: {
            title: 'Tasks',
            breadcrumb: 'Tasks'
          }
    }
]
