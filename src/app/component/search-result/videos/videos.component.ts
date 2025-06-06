import { Component } from '@angular/core';
import * as Data from '../../../shared/data/search-result/search-result';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-videos',
    imports: [CommonModule],
    templateUrl: './videos.component.html',
    styleUrls: ['./videos.component.scss']
})
export class VideosComponent {

  public videosData = Data.videosData;

  constructor(public sanitizer: DomSanitizer) { }
  
  safe(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
