import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Message } from '../../../../shared/data/dashboard/ecommerce/dashboard-ecommerce';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
    selector: 'app-message',
    imports: [CommonModule, RouterModule, ClickOutsideDirective],
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  public MessageData = Message;

  openMenu(id: number) {
    this.MessageData.filter((data) => {
      if (data.id == id) {
        data.isActive = !data.isActive
      }
    })
  }

}
