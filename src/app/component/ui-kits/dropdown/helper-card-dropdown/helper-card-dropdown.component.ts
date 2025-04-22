import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/ui-kits/dropdown';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-helper-card-dropdown',
    imports: [CommonModule, NgbModule],
    templateUrl: './helper-card-dropdown.component.html',
    styleUrls: ['./helper-card-dropdown.component.scss']
})
export class HelperCardDropdownComponent {

  public helpercardData = Data.HelperCard;

}
