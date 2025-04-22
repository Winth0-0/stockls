import { Component } from '@angular/core';
import { FaqTopPartData, articlesAndVideosData, featuredTutorialData } from '../../shared/data/faq/faq';
import { CommonModule } from '@angular/common';
import { TopCommonFaqComponent } from './top-common-faq/top-common-faq.component';
import { FeaturedTutorialsComponent } from './featured-tutorials/featured-tutorials.component';
import { LatestArticalVideosComponent } from './latest-artical-videos/latest-artical-videos.component';
import { LatestUpdateComponent } from './latest-update/latest-update.component';
import { NavigationComponent } from './navigation/navigation.component';
import { QuestionsComponent } from './questions/questions.component';
import { SerachArticalComponent } from './serach-artical/serach-artical.component';

@Component({
    selector: 'app-faq',
    imports: [CommonModule, TopCommonFaqComponent, FeaturedTutorialsComponent, LatestArticalVideosComponent, LatestUpdateComponent,
        NavigationComponent, QuestionsComponent, SerachArticalComponent, TopCommonFaqComponent],
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

  public FaqTopPartData = FaqTopPartData;
  public featuredTutorialData = featuredTutorialData;
  public articlesAndVideosData = articlesAndVideosData;

}
