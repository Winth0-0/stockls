import { Component } from '@angular/core';
import { HorizontalLists } from '../../../../shared/data/ui-kits/lists';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-horizontal-lists',
    imports: [CommonModule],
    templateUrl: './horizontal-lists.component.html',
    styleUrls: ['./horizontal-lists.component.scss']
})
export class HorizontalListsComponent {

  public horizontalData = HorizontalLists;

}
