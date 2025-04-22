import { Component } from '@angular/core';
import { Turnover } from '../../../../shared/data/widgets/chart';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-turn-over',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './turn-over.component.html',
    styleUrls: ['./turn-over.component.scss']
})
export class TurnOverComponent {

  public TurnOverChart = Turnover;

}
