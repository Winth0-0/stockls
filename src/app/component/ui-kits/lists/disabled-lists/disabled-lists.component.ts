import { Component } from '@angular/core';
import { DisabledLists } from '../../../../shared/data/ui-kits/lists';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-disabled-lists',
    imports: [CommonModule],
    templateUrl: './disabled-lists.component.html',
    styleUrls: ['./disabled-lists.component.scss']
})
export class DisabledListsComponent {

  public disableData = DisabledLists;

}
