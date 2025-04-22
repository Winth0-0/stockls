import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/social-media/social-media-data';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-followers',
    imports: [CommonModule, NgbModule],
    templateUrl: './followers.component.html',
    styleUrls: ['./followers.component.scss']
})
export class FollowersComponent {

  public followersData = data.Followers;


}
