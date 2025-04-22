import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-description-tab',
    imports: [CommonModule, NgbModule],
    templateUrl: './description-tab.component.html',
    styleUrls: ['./description-tab.component.scss']
})
export class DescriptionTabComponent {

  public openTab: string = "febric";

  public tabbed(val: string) {
    this.openTab = val
  }

}
