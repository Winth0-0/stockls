import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Invoice2TableComponent } from './invoice2-table/invoice2-table.component';
import { Invoice2TotalComponent } from './invoice2-total/invoice2-total.component';
import { Invoice2TopComponent } from './invoice2-top/invoice2-top.component';
import { NgxPrintModule } from 'ngx-print';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-invoice2',
    imports: [CommonModule, Invoice2TableComponent, Invoice2TotalComponent, Invoice2TopComponent, NgxPrintModule, NgbModule],
    templateUrl: './invoice2.component.html',
    styleUrls: ['./invoice2.component.scss']
})
export class Invoice2Component {

}
