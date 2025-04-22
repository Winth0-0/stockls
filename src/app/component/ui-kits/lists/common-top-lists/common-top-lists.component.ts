import { Component } from '@angular/core';
import { topcommonlists } from '../../../../shared/data/ui-kits/lists';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-common-top-lists',
    imports: [CommonModule],
    templateUrl: './common-top-lists.component.html',
    styleUrls: ['./common-top-lists.component.scss']
})
export class CommonTopListsComponent {

  public commonLists = topcommonlists;

}
