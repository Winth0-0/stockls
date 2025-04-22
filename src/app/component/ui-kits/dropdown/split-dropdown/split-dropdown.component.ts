import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/ui-kits/dropdown';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-split-dropdown',
    imports: [CommonModule, NgbModule],
    templateUrl: './split-dropdown.component.html',
    styleUrls: ['./split-dropdown.component.scss']
})
export class SplitDropdownComponent {

  public splitDropdownData = Data.SplitDropdown;

}
