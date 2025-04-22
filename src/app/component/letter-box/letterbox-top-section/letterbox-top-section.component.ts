import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideDirective } from '../../../shared/directives/outside.directive';

@Component({
    selector: 'app-letterbox-top-section',
    imports: [CommonModule, NgbModule, ClickOutsideDirective],
    templateUrl: './letterbox-top-section.component.html',
    styleUrls: ['./letterbox-top-section.component.scss']
})
export class LetterboxTopSectionComponent {

  public active = 1;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside():void { 
    this.isOpen = false;
  }

}
