import { Component } from '@angular/core';
import { descriptionData, reviewData, userDetailsData } from '../../../../shared/data/ui-kits/tab';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-material-style-tabs',
    imports: [CommonModule, NgbModule, FormsModule],
    templateUrl: './material-style-tabs.component.html',
    styleUrls: ['./material-style-tabs.component.scss']
})
export class MaterialStyleTabsComponent {

  public active = 1;
  public userDetailsData = userDetailsData;
  public descriptionData = descriptionData;
  public reviewData = reviewData;

}
