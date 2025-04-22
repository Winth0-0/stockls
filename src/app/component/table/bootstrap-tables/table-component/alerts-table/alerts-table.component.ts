import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AllAlertsTableComponent } from './all-alerts-table/all-alerts-table.component';

@Component({
    selector: 'app-alerts-table',
    imports: [CommonModule, AllAlertsTableComponent],
    templateUrl: './alerts-table.component.html',
    styleUrls: ['./alerts-table.component.scss']
})
export class AlertsTableComponent {

}
