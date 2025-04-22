import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/apex-chart';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';


@Component({
    selector: 'app-stepline-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './stepline-chart.component.html',
    styleUrls: ['./stepline-chart.component.scss']
})
export class SteplineChartComponent {
  
  public steplineChart = chartData.steplineChart;

}
