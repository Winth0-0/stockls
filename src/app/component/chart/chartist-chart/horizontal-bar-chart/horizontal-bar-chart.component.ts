import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/chartist-chart';
import { CommonModule } from '@angular/common';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-horizontal-bar-chart',
    imports: [CommonModule, ChartistModule],
    templateUrl: './horizontal-bar-chart.component.html',
    styleUrls: ['./horizontal-bar-chart.component.scss']
})
export class HorizontalBarChartComponent {

  public chart8 = chartData.chart8;

}
