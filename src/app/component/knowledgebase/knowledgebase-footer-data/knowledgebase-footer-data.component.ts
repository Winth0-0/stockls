import { Component } from '@angular/core';
import { articlesAndVideosData, featuredTutorialData } from '../../../shared/data/knowledgebase/knowledgebase';
import { FeaturedTutorialsComponent } from '../../faq/featured-tutorials/featured-tutorials.component';
import { LatestArticalVideosComponent } from '../../faq/latest-artical-videos/latest-artical-videos.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-knowledgebase-footer-data',
    imports: [CommonModule, FeaturedTutorialsComponent, LatestArticalVideosComponent],
    templateUrl: './knowledgebase-footer-data.component.html',
    styleUrl: './knowledgebase-footer-data.component.scss'
})
export class KnowledgebaseFooterDataComponent {


  public featuredTutorialData = featuredTutorialData;
  public articlesAndVideosData = articlesAndVideosData;

}
