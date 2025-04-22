import { Component } from '@angular/core';
import { basictable } from '../../../../../shared/data/table/bootstrap-table/basic-tables';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-basic-table-border-bottom-color',
    imports: [CommonModule],
    templateUrl: './basic-table-border-bottom-color.component.html',
    styleUrls: ['./basic-table-border-bottom-color.component.scss']
})
export class BasicTableBorderBottomColorComponent {

  public basicTable = basictable;

}
