import { Component } from '@angular/core';
import { Ratio } from '../../../../shared/data/ui-kits/avavtar';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-ratio',
    imports: [CommonModule],
    templateUrl: './ratio.component.html',
    styleUrls: ['./ratio.component.scss']
})
export class RatioComponent {

  public ratioData = Ratio;

}
