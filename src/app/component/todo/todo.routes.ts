import { Routes } from '@angular/router';
import { TodoComponent } from './todo.component';


export const Todo: Routes = [
    {
        path: '',
        component: TodoComponent,
        data: {
            title: 'To Do',
            breadcrumb: 'To Do'
          }
    }
]