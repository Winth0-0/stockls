import { Component } from '@angular/core';
import { lightThemeAlert } from '../../../../shared/data/ui-kits/alert';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-light-theme-alert',
    imports: [CommonModule],
    templateUrl: './light-theme-alert.component.html',
    styleUrls: ['./light-theme-alert.component.scss']
})
export class LightThemeAlertComponent {

  public lightThemeData = lightThemeAlert;


}
