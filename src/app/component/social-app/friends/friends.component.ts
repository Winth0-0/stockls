import { Component } from '@angular/core';
import * as data from '../../../shared/data/user/users-card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-friends',
    imports: [CommonModule, RouterModule],
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.scss']
})
export class FriendsComponent {

  public friendsData = data.userCard;

}
