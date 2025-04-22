import { Component, Input } from '@angular/core';
import * as data from "../../../../../../shared/data/contacts/all-contact";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-general',
    imports: [CommonModule],
    templateUrl: './general.component.html',
    styleUrl: './general.component.scss'
})
export class GeneralComponent {

  @Input() lastData: data.lastDataList;


}
