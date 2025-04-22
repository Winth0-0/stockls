import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VideosComponent } from './videos/videos.component';
import { ImagesComponent } from './images/images.component';
import { AllComponent } from './all/all.component';

@Component({
    selector: 'app-search-result',
    imports: [CommonModule, AllComponent, ImagesComponent, VideosComponent],
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {

  public openTab: string = "All";

  public tabbed(val: string) {
    this.openTab = val
  }

}
