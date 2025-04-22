import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineComponent } from '../timeline/timeline.component';
import { FriendsComponent } from '../friends/friends.component';
import { PhotosComponent } from '../photos/photos.component';
import { AboutComponent } from '../about/about.component';


@Component({
    selector: 'app-social-profile',
    imports: [CommonModule, PhotosComponent, TimelineComponent, FriendsComponent, AboutComponent],
    templateUrl: './social-profile.component.html',
    styleUrls: ['./social-profile.component.scss']
})
export class SocialProfileComponent {
  public openTab: string = "timeline";

  constructor() { }

  public tabbed(val: string) {
    this.openTab = val
  }

  ngOnInit(): void {
  }

}
