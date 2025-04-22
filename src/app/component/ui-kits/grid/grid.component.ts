import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GridColumnComponent } from './grid-column/grid-column.component';
import { GridOptionsComponent } from './grid-options/grid-options.component';
import { HorizontalAlignmentComponent } from './horizontal-alignment/horizontal-alignment.component';
import { NestingComponent } from './nesting/nesting.component';
import { OffsetComponent } from './offset/offset.component';
import { OrderComponent } from './order/order.component';
import { VerticalAlignmentComponent } from './vertical-alignment/vertical-alignment.component';

@Component({
    selector: 'app-grid',
    imports: [CommonModule, GridColumnComponent, GridOptionsComponent, HorizontalAlignmentComponent, NestingComponent, OffsetComponent,
        OrderComponent, VerticalAlignmentComponent],
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridComponent {

}
