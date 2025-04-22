import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllUserComponent } from './all-user/all-user.component';
import { MessagesComponent } from './messages/messages.component';
import { NotificationCartComponent } from './notification-cart/notification-cart.component';

@Component({
    selector: 'app-notification',
    imports: [CommonModule, RouterModule, AllUserComponent, MessagesComponent, NotificationCartComponent],
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

  public active = 1;
  public notifications: boolean = false;
  public openTab: string = "all";

  constructor() { }

  public tabbed(val: string) {
    this.openTab = val
  }

  notification() {
    this.notifications = !this.notifications
  }

}
