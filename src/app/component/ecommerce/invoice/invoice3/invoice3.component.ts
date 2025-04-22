import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Invoice3TableComponent } from './invoice3-table/invoice3-table.component';
import { Invoice3TotalComponent } from './invoice3-total/invoice3-total.component';
import { Invoice3TopComponent } from './invoice3-top/invoice3-top.component';
import { NgxPrintModule } from 'ngx-print';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-invoice3',
    imports: [CommonModule, Invoice3TableComponent, Invoice3TotalComponent, Invoice3TopComponent, NgxPrintModule, NgbModule],
    templateUrl: './invoice3.component.html',
    styleUrls: ['./invoice3.component.scss']
})
export class Invoice3Component {

}
