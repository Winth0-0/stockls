import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/apex-chart';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-bubble-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './bubble-chart.component.html',
    styleUrls: ['./bubble-chart.component.scss']
})
export class BubbleChartComponent {

  public bubbleChart = chartData.bubbleChart;

}
