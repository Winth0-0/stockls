import { Component } from '@angular/core';
import { userCard } from '../../../shared/data/user/users-card';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-user-cards',
    imports: [CommonModule],
    templateUrl: './user-cards.component.html',
    styleUrls: ['./user-cards.component.scss']
})
export class UserCardsComponent {

  public users = userCard;

}
