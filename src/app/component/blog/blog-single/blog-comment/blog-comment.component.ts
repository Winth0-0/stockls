import { Component, Input } from '@angular/core';
import { comments } from '../../../../shared/data/blog/blog-data';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-blog-comment',
    imports: [CommonModule],
    templateUrl: './blog-comment.component.html',
    styleUrls: ['./blog-comment.component.scss']
})
export class BlogCommentComponent {

  @Input() data : comments[];

}
