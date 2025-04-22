import { Component } from '@angular/core';
import { commentsData } from '../../../shared/data/blog/blog-data';
import { CommonModule } from '@angular/common';
import { BlogCommentComponent } from './blog-comment/blog-comment.component';

@Component({
    selector: 'app-blog-single',
    imports: [CommonModule, BlogCommentComponent],
    templateUrl: './blog-single.component.html',
    styleUrls: ['./blog-single.component.scss']
})
export class BlogSingleComponent {

  public commentsData = commentsData;
  
}
