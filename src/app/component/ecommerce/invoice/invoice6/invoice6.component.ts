import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Invoice6TableComponent } from './invoice6-table/invoice6-table.component';
import { NgxPrintModule } from 'ngx-print';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-invoice6',
    imports: [CommonModule, Invoice6TableComponent, NgxPrintModule, NgbModule],
    templateUrl: './invoice6.component.html',
    styleUrls: ['./invoice6.component.scss']
})
export class Invoice6Component {

}
