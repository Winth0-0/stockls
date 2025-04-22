import { Component } from '@angular/core';
import { Grouping } from '../../../../shared/data/ui-kits/avavtar';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-grouping',
    imports: [CommonModule],
    templateUrl: './grouping.component.html',
    styleUrls: ['./grouping.component.scss']
})
export class GroupingComponent {

  public groupingdata = Grouping;

}
