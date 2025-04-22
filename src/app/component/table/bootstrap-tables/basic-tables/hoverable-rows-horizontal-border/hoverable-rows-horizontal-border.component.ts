import { Component } from '@angular/core';
import { hoverbleData } from '../../../../../shared/data/table/bootstrap-table/basic-tables';
import { CommonModule } from '@angular/common';
import { FeathericonComponent } from '../../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-hoverable-rows-horizontal-border',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './hoverable-rows-horizontal-border.component.html',
    styleUrls: ['./hoverable-rows-horizontal-border.component.scss']
})
export class HoverableRowsHorizontalBorderComponent {

  public hoverble = hoverbleData;


}
