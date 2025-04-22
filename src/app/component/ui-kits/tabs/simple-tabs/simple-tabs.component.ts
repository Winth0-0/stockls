import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-simple-tabs',
    imports: [CommonModule, NgbModule, FormsModule],
    templateUrl: './simple-tabs.component.html',
    styleUrls: ['./simple-tabs.component.scss']
})
export class SimpleTabsComponent {

  public active = 2;

}
