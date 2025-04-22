import { Component } from '@angular/core';
import { NumberedBadgeLists } from '../../../../shared/data/ui-kits/lists';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-numbered-badge-lists',
    imports: [CommonModule],
    templateUrl: './numbered-badge-lists.component.html',
    styleUrls: ['./numbered-badge-lists.component.scss']
})
export class NumberedBadgeListsComponent {

  public NumberedBadgeData = NumberedBadgeLists;

}
