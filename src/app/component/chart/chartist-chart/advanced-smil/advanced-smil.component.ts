import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/chartist-chart';
import { CommonModule } from '@angular/common';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-advanced-smil',
    imports: [CommonModule, ChartistModule],
    templateUrl: './advanced-smil.component.html',
    styleUrls: ['./advanced-smil.component.scss']
})
export class AdvancedSmilComponent {

  public chart1 = chartData.chart1;

}
