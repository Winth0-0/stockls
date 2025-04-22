import { Component } from '@angular/core';
import * as  data from '../../../shared/data/ui-kits/progress';
import { CommonModule } from '@angular/common';
import { CommonProgressBarComponent } from './common-progress-bar/common-progress-bar.component';
import { CustomHeightProgressBarsComponent } from './custom-height-progress-bars/custom-height-progress-bars.component';
import { CustomProgressBarsComponent } from './custom-progress-bars/custom-progress-bars.component';
import { LargeProgressBarsComponent } from './large-progress-bars/large-progress-bars.component';
import { MultipleBarsComponent } from './multiple-bars/multiple-bars.component';
import { ProgressNumberStepsComponent } from './progress-number-steps/progress-number-steps.component';
import { SmallProgressBarsComponent } from './small-progress-bars/small-progress-bars.component';

@Component({
    selector: 'app-progress',
    imports: [CommonModule, CommonProgressBarComponent, CustomHeightProgressBarsComponent, CustomProgressBarsComponent,
        LargeProgressBarsComponent, MultipleBarsComponent, ProgressNumberStepsComponent, SmallProgressBarsComponent],
    templateUrl: './progress.component.html',
    styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {

  public basicData = data.basicProgress;
  public progressStripedData = data.ProgressBarsStriped;
  public progressAnimatedData = data.ProgressBarsAnimated;

}
