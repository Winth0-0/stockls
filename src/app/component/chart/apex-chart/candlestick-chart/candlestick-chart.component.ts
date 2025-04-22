import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/apex-chart';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-candlestick-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './candlestick-chart.component.html',
    styleUrls: ['./candlestick-chart.component.scss']
})
export class CandlestickChartComponent {

  public candlestickChart = chartData.candlestickChart;

}
