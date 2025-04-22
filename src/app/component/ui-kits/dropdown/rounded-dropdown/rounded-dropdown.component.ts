import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/ui-kits/dropdown';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-rounded-dropdown',
    imports: [CommonModule, NgbModule],
    templateUrl: './rounded-dropdown.component.html',
    styleUrls: ['./rounded-dropdown.component.scss']
})
export class RoundedDropdownComponent {

  public roundedDropdownData = Data.RoundedDropdown;

}
