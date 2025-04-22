import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/chartist-chart';
import { CommonModule } from '@angular/common';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-simple-line-chart',
    imports: [CommonModule, ChartistModule],
    templateUrl: './simple-line-chart.component.html',
    styleUrls: ['./simple-line-chart.component.scss']
})
export class SimpleLineChartComponent {

  public chart10 = chartData.chart10;

}
