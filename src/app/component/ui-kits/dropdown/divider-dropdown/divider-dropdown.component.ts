import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/ui-kits/dropdown';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-divider-dropdown',
    imports: [CommonModule, NgbModule],
    templateUrl: './divider-dropdown.component.html',
    styleUrls: ['./divider-dropdown.component.scss']
})
export class DividerDropdownComponent {

  public dividerdropdownData = Data.DividerDropdown;

}
