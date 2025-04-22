import { Component } from '@angular/core';
import { tablehead } from '../../../../../shared/data/table/bootstrap-table/basic-tables';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-table-head-options',
    imports: [CommonModule],
    templateUrl: './table-head-options.component.html',
    styleUrls: ['./table-head-options.component.scss']
})
export class TableHeadOptionsComponent {

  public headoptionsData = tablehead;

}
