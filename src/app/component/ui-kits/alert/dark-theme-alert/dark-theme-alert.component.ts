import { Component } from '@angular/core';
import { darkThemAlert } from '../../../../shared/data/ui-kits/alert';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dark-theme-alert',
    imports: [CommonModule],
    templateUrl: './dark-theme-alert.component.html',
    styleUrls: ['./dark-theme-alert.component.scss']
})
export class DarkThemeAlertComponent {

  public darkThemeData = darkThemAlert;

}
