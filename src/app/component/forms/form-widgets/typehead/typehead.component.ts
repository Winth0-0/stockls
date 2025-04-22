import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormattedResultsComponent } from './formatted-results/formatted-results.component';
import { GlobalConfigurationComponent } from './global-configuration/global-configuration.component';
import { OpenFocusTypeheadComponent } from './open-focus-typehead/open-focus-typehead.component';
import { PerventManualEntryComponent } from './pervent-manual-entry/pervent-manual-entry.component';
import { SelectOnExactComponent } from './select-on-exact/select-on-exact.component';
import { SimpleTypeheadComponent } from './simple-typehead/simple-typehead.component';
import { TemlateForResultsComponent } from './temlate-for-results/temlate-for-results.component';
import { WikipediaSearchComponent } from './wikipedia-search/wikipedia-search.component';

@Component({
    selector: 'app-typehead',
    imports: [CommonModule, FormattedResultsComponent, GlobalConfigurationComponent, OpenFocusTypeheadComponent,
        PerventManualEntryComponent, SelectOnExactComponent, SimpleTypeheadComponent, TemlateForResultsComponent, WikipediaSearchComponent],
    templateUrl: './typehead.component.html',
    styleUrls: ['./typehead.component.scss']
})
export class TypeheadComponent {

}
