import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/chartjs';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-bars-chart',
    imports: [CommonModule, BaseChartDirective],
    templateUrl: './bars-chart.component.html',
    styleUrl: './bars-chart.component.scss'
})
export class BarsChartComponent {

  public barChartChartLabels = chartData.barChartChartLabels;
  public barChartChartData = chartData.barChartChartData;
  public barChartChartType = chartData.barChartChartType;
  public barChartChartOptions = chartData.barChartChartOptions;
  public barChartChartLegend = chartData.barChartChartLegend;

}
