import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/chartist-chart';
import { CommonModule } from '@angular/common';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-stacked-bar-chart',
    imports: [CommonModule, ChartistModule],
    templateUrl: './stacked-bar-chart.component.html',
    styleUrls: ['./stacked-bar-chart.component.scss']
})
export class StackedBarChartComponent {

  public chart7 = chartData.chart7;

}
