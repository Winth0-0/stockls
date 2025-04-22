import { Component } from '@angular/core';
import { PrimaryBackground } from '../../../../../shared/data/table/bootstrap-table/basic-tables';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-inverse-table-primary-background',
    imports: [CommonModule],
    templateUrl: './inverse-table-primary-background.component.html',
    styleUrls: ['./inverse-table-primary-background.component.scss']
})
export class InverseTablePrimaryBackgroundComponent {

  public primaryData = PrimaryBackground;

}
