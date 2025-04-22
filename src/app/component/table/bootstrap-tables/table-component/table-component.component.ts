import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UiTableComponent } from './ui-table/ui-table.component';
import { AlertsTableComponent } from './alerts-table/alerts-table.component';
import { ProgressbarTableComponent } from './progressbar-table/progressbar-table.component';
import { CheckboxTableComponent } from './checkbox-table/checkbox-table.component';
import { SelectTableComponent } from './select-table/select-table.component';
import { InputTableComponent } from './input-table/input-table.component';
import { BadgesTableComponent } from './badges-table/badges-table.component';
import { TooltipTriggersTableComponent } from './tooltip-triggers-table/tooltip-triggers-table.component';
import { SwitchTableComponent } from './switch-table/switch-table.component';
import { RadioButtonsTableComponent } from './radio-buttons-table/radio-buttons-table.component';

@Component({
    selector: 'app-table-component',
    imports: [CommonModule, UiTableComponent, AlertsTableComponent, ProgressbarTableComponent, CheckboxTableComponent,
        RadioButtonsTableComponent, SelectTableComponent, InputTableComponent, BadgesTableComponent, TooltipTriggersTableComponent,
        SwitchTableComponent],
    templateUrl: './table-component.component.html',
    styleUrls: ['./table-component.component.scss']
})
export class TableComponentComponent {

}
