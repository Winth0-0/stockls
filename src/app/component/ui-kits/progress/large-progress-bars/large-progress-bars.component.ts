import { Component } from '@angular/core';
import { LargeProgressbars } from '../../../../shared/data/ui-kits/progress';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-large-progress-bars',
    imports: [CommonModule],
    templateUrl: './large-progress-bars.component.html',
    styleUrls: ['./large-progress-bars.component.scss']
})
export class LargeProgressBarsComponent {

  public largeProgressData = LargeProgressbars;

}
