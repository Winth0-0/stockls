import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-vertical-tabs',
    imports: [CommonModule, NgbModule, FormsModule],
    templateUrl: './vertical-tabs.component.html',
    styleUrls: ['./vertical-tabs.component.scss']
})
export class VerticalTabsComponent {

  public active = 2;

}
