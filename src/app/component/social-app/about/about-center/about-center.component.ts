import { Component } from '@angular/core';
import * as data from '../../../../shared/data/social-media/social-media-data';
import { CommonModule } from '@angular/common';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { CommonAddFriendsComponent } from './common-add-friends/common-add-friends.component';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HobbiesEductionComponent } from './hobbies-eduction/hobbies-eduction.component';

@Component({
    selector: 'app-about-center',
    imports: [CommonModule, ActivityLogComponent, HobbiesEductionComponent, CommonAddFriendsComponent, FeathericonComponent, NgbModule],
    templateUrl: './about-center.component.html',
    styleUrls: ['./about-center.component.scss']
})
export class AboutCenterComponent {

  public addFriendsData = data.peopleKnowYouData;
  public hobbiesAndInterestData = data.hobbiedAndInterestData;
  public eductionData = data.eductionData;

}
