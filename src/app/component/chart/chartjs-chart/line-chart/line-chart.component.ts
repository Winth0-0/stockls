import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/chartjs';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-line-chart',
    imports: [CommonModule, BaseChartDirective],
    templateUrl: './line-chart.component.html',
    styleUrl: './line-chart.component.scss'
})
export class LineChartComponent {

  public lineChartOptions = chartData.lineChartOptions;
  public lineChartLabels = chartData.lineChartLabels;
  public lineChartType = chartData.lineChartType;
  public lineChartLegend = chartData.lineChartLegend;
  public lineChartData = chartData.lineChartData;

}
