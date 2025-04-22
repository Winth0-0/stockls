import { Component } from '@angular/core';
import { SmallProgressbars } from '../../../../shared/data/ui-kits/progress';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-small-progress-bars',
    imports: [CommonModule],
    templateUrl: './small-progress-bars.component.html',
    styleUrls: ['./small-progress-bars.component.scss']
})
export class SmallProgressBarsComponent {

  public smallProgressData = SmallProgressbars;

}
