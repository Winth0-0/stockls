import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-border-tabs',
    imports: [CommonModule, NgbModule, FormsModule],
    templateUrl: './border-tabs.component.html',
    styleUrls: ['./border-tabs.component.scss']
})
export class BorderTabsComponent {

  public active = 2;

}
