import { Component } from '@angular/core';
import { Commonmargin } from '../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-one-side-margin',
    imports: [CommonModule],
    templateUrl: './one-side-margin.component.html',
    styleUrls: ['./one-side-margin.component.scss']
})
export class OneSideMarginComponent {

  public marginCommonData = Commonmargin

}
