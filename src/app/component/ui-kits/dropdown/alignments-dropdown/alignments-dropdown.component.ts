import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as Data from '../../../../shared/data/ui-kits/dropdown';

@Component({
    selector: 'app-alignments-dropdown',
    imports: [CommonModule, NgbModule],
    templateUrl: './alignments-dropdown.component.html',
    styleUrls: ['./alignments-dropdown.component.scss']
})
export class AlignmentsDropdownComponent {

  public alignmentsDropdownData = Data.AlignmentsDropdown;

}
