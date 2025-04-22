import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-material-style-left-tabs',
    imports: [CommonModule, NgbModule, FormsModule],
    templateUrl: './material-style-left-tabs.component.html',
    styleUrls: ['./material-style-left-tabs.component.scss']
})
export class MaterialStyleLeftTabsComponent {

  public active = 1;


}
