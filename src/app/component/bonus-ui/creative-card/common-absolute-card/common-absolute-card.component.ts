import { Component } from '@angular/core';
import { commonAbsoluteCardData } from '../../../../shared/data/bonus-ui/creative-cards';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-common-absolute-card',
    imports: [CommonModule],
    templateUrl: './common-absolute-card.component.html',
    styleUrls: ['./common-absolute-card.component.scss']
})
export class CommonAbsoluteCardComponent {

  public commonData = commonAbsoluteCardData;

}
