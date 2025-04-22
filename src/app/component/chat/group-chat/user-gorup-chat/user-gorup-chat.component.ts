import { Component } from '@angular/core';
import { massage } from '../../../../shared/data/chat/chat';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
    selector: 'app-user-gorup-chat',
    imports: [CommonModule, ClickOutsideDirective],
    templateUrl: './user-gorup-chat.component.html',
    styleUrls: ['./user-gorup-chat.component.scss']
})
export class UserGorupChatComponent {

  public MsgData = massage;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }
  
  clickOutside():void { 
    this.isOpen = false;
  }

}
