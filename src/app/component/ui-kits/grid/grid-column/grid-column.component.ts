import { Component } from '@angular/core';
import { gridColumn } from '../../../../shared/data/ui-kits/grid-options';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-grid-column',
    imports: [CommonModule],
    templateUrl: './grid-column.component.html',
    styleUrls: ['./grid-column.component.scss']
})
export class GridColumnComponent {

  public gridColumnData = gridColumn;

}
