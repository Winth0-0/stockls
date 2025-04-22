import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/ui-kits/dropdown';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-sizing-dropdown',
    imports: [CommonModule, NgbModule],
    templateUrl: './sizing-dropdown.component.html',
    styleUrls: ['./sizing-dropdown.component.scss']
})
export class SizingDropdownComponent {

  public sizingdropdownData = Data.DropdownSizing;

}
