import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-icons-tabs',
    imports: [CommonModule, NgbModule, FormsModule],
    templateUrl: './icons-tabs.component.html',
    styleUrls: ['./icons-tabs.component.scss']
})
export class IconsTabsComponent {

  public active = 1;

}
