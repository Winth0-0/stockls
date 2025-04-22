import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommentOneComponent } from './comment-one/comment-one.component';
import { CommentTwoComponent } from './comment-two/comment-two.component';

@Component({
    selector: 'app-timeline-center',
    imports: [CommonModule, CommentOneComponent, CommentTwoComponent],
    templateUrl: './timeline-center.component.html',
    styleUrls: ['./timeline-center.component.scss']
})
export class TimelineCenterComponent {

}
