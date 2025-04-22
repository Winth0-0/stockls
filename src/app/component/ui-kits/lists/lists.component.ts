import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommonTopListsComponent } from './common-top-lists/common-top-lists.component';
import { ContextualClassesComponent } from './contextual-classes/contextual-classes.component';
import { CustomContentListsComponent } from './custom-content-lists/custom-content-lists.component';
import { DisabledListsComponent } from './disabled-lists/disabled-lists.component';
import { HorizontalListsComponent } from './horizontal-lists/horizontal-lists.component';
import { ListsNumberComponent } from './lists-number/lists-number.component';
import { ListsRadiosComponent } from './lists-radios/lists-radios.component';
import { NumberedBadgeListsComponent } from './numbered-badge-lists/numbered-badge-lists.component';
import { ScrollableListsComponent } from './scrollable-lists/scrollable-lists.component';
import { JavaScriptBehaviorComponent } from './java-script-behavior/java-script-behavior.component';
import { ListsCheckboxComponent } from './lists-checkbox/lists-checkbox.component';

@Component({
    selector: 'app-lists',
    imports: [CommonModule, CommonTopListsComponent, ContextualClassesComponent, CustomContentListsComponent, DisabledListsComponent,
        HorizontalListsComponent, ListsNumberComponent, ListsRadiosComponent, NumberedBadgeListsComponent, ScrollableListsComponent,
        ListsCheckboxComponent, JavaScriptBehaviorComponent],
    templateUrl: './lists.component.html',
    styleUrls: ['./lists.component.scss']
})
export class ListsComponent {

}
