import { Component } from '@angular/core';
import { commonInfoColorCardData } from '../../../../shared/data/bonus-ui/basic-card';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-common-info-card',
    imports: [CommonModule],
    templateUrl: './common-info-card.component.html',
    styleUrls: ['./common-info-card.component.scss']
})
export class CommonInfoCardComponent {

  public basicData = commonInfoColorCardData;

}
