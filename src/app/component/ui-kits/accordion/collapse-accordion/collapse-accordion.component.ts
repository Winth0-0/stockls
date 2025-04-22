import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-collapse-accordion',
    imports: [CommonModule],
    templateUrl: './collapse-accordion.component.html',
    styleUrls: ['./collapse-accordion.component.scss']
})
export class CollapseAccordionComponent {

  public togglecollpese = false;

  toggle() {
    this.togglecollpese = !this.togglecollpese;
  }

  open() {
    this.togglecollpese = !this.togglecollpese;
  }

}
