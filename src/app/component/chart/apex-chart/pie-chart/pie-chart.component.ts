import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/apex-chart';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-pie-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {

  public pieChart = chartData.pieChart;

}
