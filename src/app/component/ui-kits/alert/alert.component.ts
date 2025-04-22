import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdditionalContentComponent } from './additional-content/additional-content.component';
import { DarkThemeAlertComponent } from './dark-theme-alert/dark-theme-alert.component';
import { DismissingDarkAlertComponent } from './dismissing-dark-alert/dismissing-dark-alert.component';
import { DismissingLightAlertComponent } from './dismissing-light-alert/dismissing-light-alert.component';
import { IconTextAlertsComponent } from './icon-text-alerts/icon-text-alerts.component';
import { LeftBorderAlertComponent } from './left-border-alert/left-border-alert.component';
import { LightThemeAlertComponent } from './light-theme-alert/light-theme-alert.component';
import { LiveAlertComponent } from './live-alert/live-alert.component';
import { OutlineDarkLightAlertsComponent } from './outline-dark-light-alerts/outline-dark-light-alerts.component';

@Component({
    selector: 'app-alert',
    imports: [CommonModule, AdditionalContentComponent, DarkThemeAlertComponent, DismissingDarkAlertComponent, DismissingLightAlertComponent,
        IconTextAlertsComponent, LeftBorderAlertComponent, LightThemeAlertComponent, LiveAlertComponent, OutlineDarkLightAlertsComponent],
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

}
