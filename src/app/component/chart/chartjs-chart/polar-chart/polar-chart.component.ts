import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/chartjs';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-polar-chart',
    imports: [CommonModule, BaseChartDirective],
    templateUrl: './polar-chart.component.html',
    styleUrl: './polar-chart.component.scss'
})
export class PolarChartComponent {

  public polarChartLabels = chartData.polarChartLabels;
  public polarChartData = chartData.polarChartData;
  public polarChartType = chartData.polarChartType;
  public polarChartColors = chartData.polarChartColors;
  public polarChartOptions = chartData.polarChartOptions;
  public polarChartLegend = chartData.polarChartLegend;

}
