import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/chartist-chart';
import { CommonModule } from '@angular/common';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-line-chart-area',
    imports: [CommonModule, ChartistModule],
    templateUrl: './line-chart-area.component.html',
    styleUrls: ['./line-chart-area.component.scss']
})
export class LineChartAreaComponent {

  public chart5 = chartData.chart5;

}
