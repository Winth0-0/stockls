import { Component } from '@angular/core';
import { massage } from '../../../../shared/data/chat/chat';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-user-private-chat',
    imports: [CommonModule, ClickOutsideDirective],
    templateUrl: './user-private-chat.component.html',
    styleUrls: ['./user-private-chat.component.scss']
})
export class UserPrivateChatComponent {
  
  public MsgData = massage;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }
  
  clickOutside():void { 
    this.isOpen = false;
  }

}
