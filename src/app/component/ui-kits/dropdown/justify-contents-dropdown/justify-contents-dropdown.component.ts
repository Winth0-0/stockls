import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/ui-kits/dropdown';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-justify-contents-dropdown',
    imports: [CommonModule, NgbModule],
    templateUrl: './justify-contents-dropdown.component.html',
    styleUrls: ['./justify-contents-dropdown.component.scss']
})
export class JustifyContentsDropdownComponent {

  public justifyData = Data.JustifyContents;

}
