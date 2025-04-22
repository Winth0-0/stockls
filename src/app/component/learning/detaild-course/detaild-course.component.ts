import { Component } from '@angular/core';
import { commentsData } from '../../../shared/data/learning/learning';
import { BlogCommentComponent } from '../../blog/blog-single/blog-comment/blog-comment.component';
import { LearningFilterComponent } from '../learning-filter/learning-filter.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-detaild-course',
    imports: [CommonModule, LearningFilterComponent, BlogCommentComponent],
    templateUrl: './detaild-course.component.html',
    styleUrls: ['./detaild-course.component.scss']
})
export class DetaildCourseComponent {

  public commentsData = commentsData;

}
