import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AjaxRequestMovieComponent } from './ajax-request-movie/ajax-request-movie.component';
import { AutoCloseTimerComponent } from './auto-close-timer/auto-close-timer.component';
import { BasicExampleComponent } from './basic-example/basic-example.component';
import { DangerAlertComponent } from './danger-alert/danger-alert.component';
import { InfoAlertComponent } from './info-alert/info-alert.component';
import { PickachuAlertComponent } from './pickachu-alert/pickachu-alert.component';
import { QuestionsAlertComponent } from './questions-alert/questions-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { TitleTextAlertComponent } from './title-text-alert/title-text-alert.component';
import { UsernameAlertComponent } from './username-alert/username-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { WarningModeComponent } from './warning-mode/warning-mode.component';

@Component({
    selector: 'app-sweetalert2',
    imports: [CommonModule, AjaxRequestMovieComponent, AutoCloseTimerComponent, BasicExampleComponent, DangerAlertComponent,
        InfoAlertComponent, PickachuAlertComponent, QuestionsAlertComponent, SuccessAlertComponent, TitleTextAlertComponent, UsernameAlertComponent,
        WarningAlertComponent, WarningModeComponent],
    templateUrl: './sweetalert2.component.html',
    styleUrls: ['./sweetalert2.component.scss']
})
export class Sweetalert2Component {

}
