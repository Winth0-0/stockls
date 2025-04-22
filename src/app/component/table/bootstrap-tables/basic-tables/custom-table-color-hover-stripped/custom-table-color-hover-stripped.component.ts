import { Component } from '@angular/core';
import { customHover } from '../../../../../shared/data/table/bootstrap-table/basic-tables';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-custom-table-color-hover-stripped',
    imports: [CommonModule],
    templateUrl: './custom-table-color-hover-stripped.component.html',
    styleUrls: ['./custom-table-color-hover-stripped.component.scss']
})
export class CustomTableColorHoverStrippedComponent {

  public customhoverData = customHover;

}
