import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Invoice4TableComponent } from './invoice4-table/invoice4-table.component';
import { Invoice4TotalComponent } from './invoice4-total/invoice4-total.component';
import { Invoice4TopComponent } from './invoice4-top/invoice4-top.component';
import { NgxPrintModule } from 'ngx-print';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-invoice4',
    imports: [CommonModule, Invoice4TableComponent, Invoice4TotalComponent, Invoice4TopComponent, NgxPrintModule, NgbModule],
    templateUrl: './invoice4.component.html',
    styleUrls: ['./invoice4.component.scss']
})
export class Invoice4Component {

}
