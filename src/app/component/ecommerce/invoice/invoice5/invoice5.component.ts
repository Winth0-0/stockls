import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Invoice5TableComponent } from './invoice5-table/invoice5-table.component';
import { NgxPrintModule } from 'ngx-print';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Invoice5TopComponent } from './invoice5-top/invoice5-top.component';
import { Invoice5TotalComponent } from './invoice5-total/invoice5-total.component';

@Component({
    selector: 'app-invoice5',
    imports: [CommonModule, Invoice5TableComponent, Invoice5TopComponent, Invoice5TotalComponent, NgxPrintModule, NgbModule],
    templateUrl: './invoice5.component.html',
    styleUrls: ['./invoice5.component.scss']
})
export class Invoice5Component {

}
