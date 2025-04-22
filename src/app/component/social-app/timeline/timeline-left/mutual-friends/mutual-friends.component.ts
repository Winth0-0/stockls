import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/social-media/social-media-data';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-mutual-friends',
    imports: [CommonModule, NgbModule],
    templateUrl: './mutual-friends.component.html',
    styleUrls: ['./mutual-friends.component.scss']
})
export class MutualFriendsComponent {

  public isCollapsed = false;
  public mautalFriendsData = data.mutualFriendsData;

}
