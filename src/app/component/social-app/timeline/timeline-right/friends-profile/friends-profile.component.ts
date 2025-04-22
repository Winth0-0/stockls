import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/social-media/social-media-data';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-friends-profile',
    imports: [CommonModule, NgbModule],
    templateUrl: './friends-profile.component.html',
    styleUrls: ['./friends-profile.component.scss']
})
export class FriendsProfileComponent {

  public friednsData = data.Friends;

}
