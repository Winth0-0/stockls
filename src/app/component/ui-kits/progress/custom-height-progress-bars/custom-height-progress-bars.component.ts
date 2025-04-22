import { Component } from '@angular/core';
import { customheightprogress } from '../../../../shared/data/ui-kits/progress';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-custom-height-progress-bars',
    imports: [CommonModule],
    templateUrl: './custom-height-progress-bars.component.html',
    styleUrls: ['./custom-height-progress-bars.component.scss']
})
export class CustomHeightProgressBarsComponent {

  public customheightData = customheightprogress;

}
