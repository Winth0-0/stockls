import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/apex-chart';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-donut-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './donut-chart.component.html',
    styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent {

  public donutChart = chartData.donutChart;

}
