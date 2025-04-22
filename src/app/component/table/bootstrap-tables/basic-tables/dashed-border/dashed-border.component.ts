import { Component } from '@angular/core';
import { DashedBorder } from '../../../../../shared/data/table/bootstrap-table/basic-tables';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashed-border',
    imports: [CommonModule],
    templateUrl: './dashed-border.component.html',
    styleUrls: ['./dashed-border.component.scss']
})
export class DashedBorderComponent {

  public dashborderData = DashedBorder;

}
