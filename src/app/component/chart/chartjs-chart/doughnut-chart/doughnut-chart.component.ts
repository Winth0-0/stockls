import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/chartjs';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-doughnut-chart',
    imports: [CommonModule, BaseChartDirective],
    templateUrl: './doughnut-chart.component.html',
    styleUrl: './doughnut-chart.component.scss'
})
export class DoughnutChartComponent {

  public doughnutChartLabels = chartData.doughnutChartLabels;
  public doughnutChartData = chartData.doughnutChartData;
  public doughnutChartType = chartData.doughnutChartType;
  public doughnutChartColors = chartData.doughnutChartColors;
  public doughnutChartOptions = chartData.doughnutChartOptions;
  public doughnutChartLegend = chartData.doughnutChartLegend;

}
