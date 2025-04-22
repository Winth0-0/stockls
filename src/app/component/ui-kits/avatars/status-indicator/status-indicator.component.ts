import { Component } from '@angular/core';
import { StatusIndicator } from '../../../../shared/data/ui-kits/avavtar';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-status-indicator',
    imports: [CommonModule],
    templateUrl: './status-indicator.component.html',
    styleUrls: ['./status-indicator.component.scss']
})
export class StatusIndicatorComponent {

  public statusindicatorData = StatusIndicator;

}
