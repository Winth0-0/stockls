import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Invoice1TableComponent } from './invoice1-table/invoice1-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxPrintModule } from 'ngx-print';

@Component({
    selector: 'app-invoice1',
    imports: [CommonModule, Invoice1TableComponent, NgxPrintModule, NgbModule],
    templateUrl: './invoice1.component.html',
    styleUrls: ['./invoice1.component.scss']
})
export class Invoice1Component {

}
