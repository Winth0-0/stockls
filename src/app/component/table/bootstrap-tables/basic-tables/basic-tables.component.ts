import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BasicTableBorderBottomColorComponent } from './basic-table-border-bottom-color/basic-table-border-bottom-color.component';
import { BreckpointSpecificComponent } from './breckpoint-specific/breckpoint-specific.component';
import { CaptionComponent } from './caption/caption.component';
import { CustomTableColorHoverStrippedComponent } from './custom-table-color-hover-stripped/custom-table-color-hover-stripped.component';
import { DashedBorderComponent } from './dashed-border/dashed-border.component';
import { HoverableRowsHorizontalBorderComponent } from './hoverable-rows-horizontal-border/hoverable-rows-horizontal-border.component';
import { InverseTableComponent } from './inverse-table/inverse-table.component';
import { InverseTablePrimaryBackgroundComponent } from './inverse-table-primary-background/inverse-table-primary-background.component';
import { StripedRowInverseTableComponent } from './striped-row-inverse-table/striped-row-inverse-table.component';
import { ResponsiveTablesLightBackgroundComponent } from './responsive-tables-light-background/responsive-tables-light-background.component';
import { SizingTablesComponent } from './sizing-tables/sizing-tables.component';
import { TableHeadOptionsComponent } from './table-head-options/table-head-options.component';

@Component({
    selector: 'app-basic-tables',
    imports: [CommonModule, BasicTableBorderBottomColorComponent, BreckpointSpecificComponent,
        CaptionComponent, CustomTableColorHoverStrippedComponent, DashedBorderComponent, HoverableRowsHorizontalBorderComponent,
        InverseTableComponent, InverseTablePrimaryBackgroundComponent, StripedRowInverseTableComponent, ResponsiveTablesLightBackgroundComponent, SizingTablesComponent,
        TableHeadOptionsComponent],
    templateUrl: './basic-tables.component.html',
    styleUrls: ['./basic-tables.component.scss']
})
export class BasicTablesComponent {

}
