import { Component } from '@angular/core';
import { sizingTable } from '../../../../../shared/data/table/bootstrap-table/basic-tables';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-sizing-tables',
    imports: [CommonModule],
    templateUrl: './sizing-tables.component.html',
    styleUrls: ['./sizing-tables.component.scss']
})
export class SizingTablesComponent {

  public sizingData = sizingTable;

}
