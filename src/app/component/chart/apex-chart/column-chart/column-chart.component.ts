import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/apex-chart';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-column-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './column-chart.component.html',
    styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent {

  public columnChart = chartData.columnChart;

}
