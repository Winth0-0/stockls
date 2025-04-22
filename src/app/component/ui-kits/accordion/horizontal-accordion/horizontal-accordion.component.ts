import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-horizontal-accordion',
    imports: [CommonModule],
    templateUrl: './horizontal-accordion.component.html',
    styleUrls: ['./horizontal-accordion.component.scss']
})
export class HorizontalAccordionComponent {

  public togglecollpese = false;

  onClick() {
    this.togglecollpese = !this.togglecollpese;
  }

}
