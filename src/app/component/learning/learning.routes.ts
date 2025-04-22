import { Routes } from '@angular/router';
import { LearningListComponent } from './learning-list/learning-list.component';
import { DetaildCourseComponent } from './detaild-course/detaild-course.component';

export const Learning: Routes = [
  {
    path: 'learning-list',
    component: LearningListComponent,
    data: {
      title: 'Learning List',
      breadcrumb: 'Learning List'
    }
  },
  {
    path: 'detailed-course',
    component: DetaildCourseComponent,
    data: {
      title: 'Detailed Course',
      breadcrumb: 'Detailed Course'
    }
  }
]