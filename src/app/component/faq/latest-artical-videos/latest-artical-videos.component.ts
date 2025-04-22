import { Component, Input } from '@angular/core';
import { articlesAndVideos } from '../../../shared/data/faq/faq';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-latest-artical-videos',
    imports: [CommonModule, NgbModule, FeathericonComponent],
    templateUrl: './latest-artical-videos.component.html',
    styleUrls: ['./latest-artical-videos.component.scss']
})
export class LatestArticalVideosComponent {

  @Input() data: articlesAndVideos[];

}
