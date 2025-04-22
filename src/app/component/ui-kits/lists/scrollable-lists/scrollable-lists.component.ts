import { Component } from '@angular/core';
import { ScrollableLists } from '../../../../shared/data/ui-kits/lists';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-scrollable-lists',
    imports: [CommonModule],
    templateUrl: './scrollable-lists.component.html',
    styleUrls: ['./scrollable-lists.component.scss']
})
export class ScrollableListsComponent {

  public scrollableData = ScrollableLists;

}
